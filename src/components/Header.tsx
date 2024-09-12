import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1 className="font-semibold"><Link to="/">To-Do List</Link></h1>
      <nav id="mainNav">
        <ul>
          <li><NavLink to="/" className= {({isActive}) => isActive ? "navlink active rounded-lg" : "navlink"}>Home</NavLink></li>
          <li><NavLink to="/lists" className= {({isActive}) => isActive ? "navlink active rounded-lg" : "navlink"}>Lists</NavLink></li>
          <li><NavLink to="/about" className= {({isActive}) => isActive ? "navlink active rounded-lg" : "navlink"}>About</NavLink></li>
          <li><NavLink to="/login" className= {({isActive}) => isActive ? "navlink active rounded-lg" : "navlink"}>Login</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header
