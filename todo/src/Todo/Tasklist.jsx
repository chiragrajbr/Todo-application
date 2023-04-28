import axios from "axios"
import { useEffect, useState } from "react"

function Tasklist() {
    const [state,setState]=useState([])
    useEffect(()=>{
      axios.get("http://localhost:8080/getdata")
      .then((res)=>{
        setState(res.data)
      })
      .catch((e)=>{
        alert(e)
      })
    })


  return (
    <div>
      <div className="container">
        <div className="row"> 
            <div className="col-4 "></div>
               <div className="col-4 mt-2">
                <center><h3 className="text-primary">Task List</h3></center>
                <table className='table'>
                <thead>
                    <th></th>
                    <th>Task Name</th>
                    <th>Task Status</th>
                    <th></th>
                </thead>
                <tbody>
                    {
                      state.map((ele)=>{
                        return <tr>
                          <td><button className="btn btn-danger btn-sm" onClick={()=>{
                            axios.delete(`http://localhost:8080/delete/${ele.taskName}`)
                          }}>delete</button></td>
                          <td>{ele.taskName}</td>
                          <td>{ele.taskType}</td>
                          <td><button className="btn btn-success btn-sm" onClick={()=>{
                            axios.put(`http://localhost:8080/update/${ele.taskName}`,{
                            "taskType":"completed"  
                            })
                          }}>completed</button></td>
                        </tr>
                      })
                    }
                </tbody>
                </table>
              
            </div>
        </div>
      </div>
    </div>
  )
}

export default Tasklist
