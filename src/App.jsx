import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";
import styles from "./App.module.css";
import { Form } from "./components/Form";
import "./global.css";
import { useState } from "react";


function App() {
    
  const [inputTasks, setInputTasks] = useState('')
  const [todoList, setTodoList] = useState([])
  return (
    <main className={styles.App}>
      <Header />
      <Form
        inputTasks={inputTasks}
        setInputTasks={setInputTasks}
        todoList={todoList}
        setTodoList={setTodoList}
      />
      <TodoList
        todoList={todoList}
        setTodoList={setTodoList}
    
      />
     
    </main>
  );
}

export default App;
