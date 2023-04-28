import {Link} from "react-router-dom"



function Navbar1() {
  return (
    <>
   
    <nav className='navbar  navbar-expand-lg bg-dark'>
        <div className='navbar-brand text-white'> TODO APPLICATION</div>
        <div className=' ml-auto'>
            <ul className='navbar-nav text-white'>
            <li className='nav-link text-white'><Link to="/AddTask">Add task</Link></li>
            <li className='nav-link text-white'  ><Link to="/Tasklist" >TASK List</Link></li>
               

            </ul>
        </div>
    </nav>
  
          </>
  );
}

export default Navbar1;