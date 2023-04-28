import React, { useState } from 'react'
import axios from "axios"

function AddTask() {
  const [state,setState]=useState("")
  let  submit=()=>{
    try{
      axios.post("http://localhost:8080/insert",{
        "taskName":state,
        "taskType":"pending"
      })
      alert("task added successfully")
    }
    catch(e){
      alert(e)
    }

  }
  return (
    <div>
     <div className="container">
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4 mt-4">
          <h3 >Add Task</h3>
          <input className='mt-2 ' type="text" value={state } onChange={(event)=>{setState(event.target.value)}} /> <br />
          <div className="row">
            <div className="col-4"></div>
            <div className="col">
            <button className='mt-3 btn-primary' onClick={submit}>Add</button>
            </div>
          </div>

        </div>
      </div>
     </div>
    </div>
  )
}

export default AddTask
