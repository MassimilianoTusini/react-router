import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about-us">Chi siamo</NavLink>
            </li>
            <li>
                <NavLink to="/products">Prodotti</NavLink>
            </li>
        </ul>
    </nav>
  );
};


