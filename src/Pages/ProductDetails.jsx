import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";



export default function ProductDetails() {

    const { id } = useParams();
    const navigate = useNavigate()

    const [product, setProduct] = useState();

    useEffect(() => {
        console.log("ID ricevuto", id)
        console.log("URL chiamato:", `https://fakestoreapi.com/products/${id}`);

        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(response => response.json())
            .then(data => setProduct(data))
            .catch(() => { navigate ('/products') })
    }, [id, navigate]);

    return (
        <>
        { product ? (
          <div className="detail-container">
            <h1>{product.title}</h1>
            <div className="detail-card" >
                <img src={product.image} alt={product.title} />
                <div className="detail-info">
                    <span className="price">{product.price}€</span>
                    <p className="category">Category: {product.category}</p>
                    <p className="description">Description: {product.description}</p>
                    <Link to="/products" className="back-btn">
                        Torna ai prodotti
                    </Link>
                </div>
            </div>
          </div>
        ) : (<p className="loading">Caricamento...</p>)
        }   
        </>
    )
}