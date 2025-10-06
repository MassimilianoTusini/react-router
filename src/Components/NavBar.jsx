import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink> |{" "}
      <NavLink to="/about-us">Chi siamo</NavLink> |{" "}
      <NavLink to="/products">Prodotti</NavLink>
    </nav>
  );
};


