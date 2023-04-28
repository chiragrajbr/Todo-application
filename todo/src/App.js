import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Tasklist from './Todo/Tasklist'
import AddTask from './Todo/AddTask';
import Navbar1 from './Todo/Navbar'
import { BrowserRouter,Routes,Route} from "react-router-dom"


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar1/>
      <Routes>
        <Route   path='/Tasklist' element={<Tasklist/>} />
        <Route   path='/AddTask' element={<AddTask />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
