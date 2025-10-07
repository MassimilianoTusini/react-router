import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export default function Products(){
    const [products, setProducts] = useState([]);
    const scrollToTop = () => {window.scrollTo({top: 0, behavior: 'smooth'})}
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error("errore nel caricamento dei prodotti:", error));
    }, []);

    return(
        <>
            <div>
                <h1>Lista dei prodotti</h1>
            </div>
            <main>
                <div className="container">
                    <div className="card-wrapper">
                        {products.map((product)=> (
                            <Link
                                to = {`/products/${product.id}`}
                                className="card"
                                key={product.id}
                            >
                                <img src={product.image} alt={product.title} />
                                <h2>{product.title}</h2>
                                <p className="price">{product.price}€</p>
                            </Link>
                        ))}        
                    </div>
                    <div className="btn-container">
                        <button onClick={scrollToTop}>Torna all'inizio</button>
                    </div>
                </div>
            </main>
        </>
    )
}