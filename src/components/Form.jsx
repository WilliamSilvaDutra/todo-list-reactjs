
import { PlusCircle } from "phosphor-react";
import styles from './Form.module.css'
import {v4 as uuidv4} from 'uuid'

export function Form({inputTasks, setInputTasks, todoList, setTodoList}){

    const handleAddTask = function(){
        event.preventDefault()
        setInputTasks(event.target.value)
       
    }

    const onFormSubmit = function(){
        event.preventDefault()
        setTodoList([...todoList, {id: uuidv4(),title: inputTasks}])
        setInputTasks('')
    }

   

    return(
        <form  onSubmit={onFormSubmit} className={styles.addTask}>
          <input 
          type="text"
          placeholder="Digite uma nova tarefa"
          value={inputTasks}
          onChange={handleAddTask}
          required={'tasks'}
          />
          <button type="submit">
            <PlusCircle size={16} />
            Criar
          </button>
        </form>
    )
}