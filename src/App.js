import { useState } from "react";
 import UserBar from "./UserBar";
 import CreateTodo from "./createTodo";
 import TodoList from "./TodoList";

 function App() {
     const [ user, setUser ] = useState("")
     const [todos, setTodos] = useState([])

     return (
       <div>
         <UserBar user={user} setUser={setUser} />
         {user && <CreateTodo todos= {todos} setTodos= {setTodos} />}
         <TodoList todos={todos} />
       </div>
     )
 }

 export default App;