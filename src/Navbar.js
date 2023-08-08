import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <h1>Tour of Heroes</h1>
      <div className="links">
        <Link to="/">Dashboard</Link>
        <Link to="/heroes">Heroes</Link>
      </div>
    </nav>
  );
};

export default Navbar;