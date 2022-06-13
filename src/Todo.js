import React from "react";

  export default function Todo({title, description, dateCreated, dateCompleted, complete, index, dispatch, deleted}) {

      //const date = new Date().toLocaleDateString()

      //const dateCreated = date
      //const dateC = date
      
    

    //const [ checked, setChecked ] = useState(false)
     function handleChecked(evt) {
        dispatch({type:'TOGGLE_TODO', title, description, dateCreated, dateCompleted: Date(Date.now()), complete: evt.target.checked, index});
         //setChecked(evt.target.checked

      }
      function handleDelete(){
        dispatch({type: 'DELETE_TODO', index})
      }

      return (
         <div>
             <h1>{title}</h1>
             <div>{description}</div>
             <label htmlFor="complete-checkbox">Completed?</label>
             <input type="checkbox" name="complete-checkbox" value={complete} onChange={handleChecked}/>
             <br/>
             <div>Date Created: {dateCreated}</div>
             <div>Date Completed: {dateCompleted}</div>
             <input type="button" value="delete" onClick={handleDelete}></input>
        
         </div>
     )
 } 
