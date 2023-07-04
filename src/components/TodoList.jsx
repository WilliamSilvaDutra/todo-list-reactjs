import { useState } from "react";
import styles from "./TodoList.module.css";
import { ClipboardText, PlusCircle, Trash } from "phosphor-react";



export function TodoList({ todoList, setTodoList }) {
  const handleDeleteTask = ({ id }) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
    completedTasks.length --
  };

  const [completedTasks, setCompletedTasks] = useState([])
  
  function checkedTasks(event){
    const {value, checked} = event.target;
    if(checked === true){
      setCompletedTasks(pre =>[...pre, value]);
    }else(
      setCompletedTasks(pre =>{
        return [...pre.filter(task => task !== value)]
      })
    )
  }
  
  return (
    <div>
      <section className={styles.contentContainer}>
        <section className={styles.tasksStatus}>
          <div className={styles.taksCount}>
            <span>
              Tarefas Criadas:
              <div>{todoList.length}</div>
            </span>
            <span>
              Concluídas:
              <div>{completedTasks.length}</div>
            </span>
          </div>
        </section>
        {todoList.length > 0 ? (
          todoList.map((todo) => (
            <section className={styles.tasksAdd} key={todo.id}>
              <div className={styles.tasks}>
                <input
                 type="checkbox"
                 value={todo.title}
                 onChange={checkedTasks}
                />
                <label onChange={(e) => preventDefault()}>{todo.title}</label>
                <button 
                  className={styles.buttonDelete}
                  onClick={() => handleDeleteTask(todo)}>
                  <Trash size={24} />
                </button>
              </div>
            </section>
          ))
        ) : (
              <section className={styles.emptyListContainer}>
                <div className={styles.emptyListContent}>
                  <ClipboardText size={56} />
                  <strong>Você ainda não tem tarefas cadastradas</strong>
                  <p>Crie tarefas e organze seus itens a fazer</p>
                </div>

                
              </section>
        )}
      </section>
    </div>
  );
}
