import '../styles/Header.css';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h2>Bloggers</h2>
      <nav>
        <NavLink
          to="/"
          className="active"
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="active"
        >
          About
        </NavLink>
      </nav>
    </header>
  );
}
