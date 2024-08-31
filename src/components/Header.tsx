function Header() {
  return (
    <header>
      <h1 className="font-semibold"><a href="/">To-Do List</a></h1>
      <nav id="mainNav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/lists">Lists</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header
