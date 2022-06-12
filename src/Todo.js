import React, { useState } from "react";

  export default function Todo({ title, description }) {

      const date = new Date().toLocaleDateString()

      const dateCreated = date
      const dateCompleted = date
      
    

        const [ checked, setChecked ] = useState(false)
     function check(evt) {
         setChecked(evt.target.checked)

      }

      return (
         <div>
             <h1>{title}</h1>
             <div>{description}</div>
             <div>{`Date Created: ` + dateCreated}</div>
             <br/>
             <label>Completed?</label>
             <input type="checkbox" checked={checked} onChange={check}/>
             <div>Date Complete: {checked === true ? dateCompleted: ""}</div>
         </div>
     )
 } 
