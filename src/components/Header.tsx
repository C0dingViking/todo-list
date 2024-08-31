import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1 className="font-semibold"><Link to="/">To-Do List</Link></h1>
      <nav id="mainNav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/lists">Lists</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header
