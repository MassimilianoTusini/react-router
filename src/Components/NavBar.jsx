import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
        <nav className="navbar">
            <ul>
                <li>
                    <NavLink to="/" className="navlink">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about-us" className="navlink">Chi siamo</NavLink>
                </li>
                <li>
                    <NavLink to="/products" className="navlink">Prodotti</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  );
};


