import { NavLink } from "react-router-dom";
export default function Home() {
    return (
        <div className="title-container">
            <h1>Benvenuto nel Fake Store</h1>
            <p className="subtitle">Vai ai nostri <NavLink to="/products" className="navlink-go">Prodotti</NavLink></p>
        </div>
    )
}