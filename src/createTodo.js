import React, {useState} from "react";
import { useResource } from 'react-request-hook'


 export default function CreateTodo ({dispatch}){

     const [title, setTitle] = useState("")
     const [description, setDescription] = useState("")

     function handleTitle(evt) {setTitle(evt.target.value)}
     function handleDesc(evt) {setDescription(evt.target.value)}

     const [todo , CreateTodo ] = useResource(({ title, description, dateCreated, complete, dateCompleted}) => ({
        url: '/todos',
        method: 'post',
        data: { title, description, dateCreated, complete, dateCompleted}
    }))

     function handleCreate(evt){
         //const newTodo = {title, description}
        //setTodos([newTodo, ...todos])
        CreateTodo({title, description, dateCreated: Date(Date.now()), dateCompleted: null, complete: false})
        dispatch({ type: 'CREATE_TODO', title, description, dateCreated: Date(Date.now()), dateCompleted: null, complete: false })

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