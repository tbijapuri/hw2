import React, {useState} from "react";

 export default function CreateTodo ({setTodos, todos}){

     const [title, setTitle] = useState("")
     const [description, setDescription] = useState("")

     function handleTitle(evt) {setTitle(evt.target.value)}
     function handleDesc(evt) {setDescription(evt.target.value)}
     function handleCreate(evt){
         const newTodo = {title, description}
         setTodos([newTodo, ...todos])
     }

     return(
         <>
         <h2> Create Todo Item </h2>
         <form onSubmit={(e) => {e.preventDefault(); handleCreate(e)}}>
             <div>
                 <label htmlFor="create-title"> Title: </label>
                 <input type="text" value={title} onChange={handleTitle} name="create-title" id="create-title" />
             </div>
             <label> Description </label>
             <textarea value={description} onChange={handleDesc} name="create-desc" id="create-desc" />
             <input type="submit" value="Create" disabled={title.length === 0} />
         </form>
         </>
     );
 }