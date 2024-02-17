import Nav from 'react-bootstrap/Nav'
import {Link,NavLink} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import './comp.css'
/* import {Link} from 'react-router-dom' */
function Header() {
return (
  <div className="up" >
    <Navbar expand="lg" className="" id="nav-1">  {/* bg-info */}
        {/* <Link to="/" className="ms-3">
      <img src="./src/img.png" className="" alt="Logo"/>
      </Link>      
        <div href="/" className='text-light' >TextFun</div> */}
        
          <section className="">
            <NavLink className="n text-light " to="/">Home</NavLink>
            <NavLink className="n text-light ps" to="/About">About us </NavLink>
            <NavLink className="n text-light " to="/Contact"> Contact Us </NavLink>
          </section>
        
    </Navbar>
    </div>
)
}

export default Header
