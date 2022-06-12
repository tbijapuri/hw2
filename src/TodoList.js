import React from "react";
 import Todo from "./Todo";

 export default function TodoList({todos=[]}){
     return(
         <div>
             {todos.map((t,i) => (
                 <Todo {...t} key={"todo-" + i} />
             ))}
         </div>
     );
 }