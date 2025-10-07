import { Link } from "react-router-dom";
export default function Home() {
    return (
        <div className="title-container">
            <h1>Benvenuto nel Fake Store</h1>
            <p className="subtitle">Vai ai nostri <Link to="/products" className="navlink-go">Prodotti</Link></p>
        </div>
    )
}