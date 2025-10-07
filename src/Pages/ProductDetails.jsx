import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


export default function ProductDetails() {

    const { id } = useParams();

    const [product, setProduct] = useState();

    useEffect(() => {
        console.log("ID ricevuto", id)
        console.log("URL chiamato:", `https://fakestoreapi.com/products/${id}`);

        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(response => response.json())
            .then(data => setProduct(data))
            .catch(error => console.error("errore nel caricamento dei prodotti:", error));
    }, [id]);

    return (
        <>
        { product ? (
            <div className="detail-card" >
                <img src={product.image} alt={product.title} />
                <div className="detail-info">
                    <h1>{product.title}</h1>
                    <p className="price">{product.price}€</p>
                    <p className="category">Categoria: {product.category}</p>
                    <p className="description">{product.description}</p>
                    <Link to="/prodotti" className="back-btn">
                        Torna ai prodotti
                    </Link>
                </div>
            </div>
        ) : (<p className="loading">Caricamento...</p>)
        }   
        </>
    )
}