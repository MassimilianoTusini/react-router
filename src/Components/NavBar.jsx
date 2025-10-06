import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
        <nav className="navbar">
            <ul>
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? "navlink active" : "navlink"}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about-us" className={({ isActive }) => isActive ? "navlink active" : "navlink"}>Chi siamo</NavLink>
                </li>
                <li>
                    <NavLink to="/products" className={({ isActive }) => isActive ? "navlink active" : "navlink"}>Prodotti</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  );
};


