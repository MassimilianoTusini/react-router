import { useState, useEffect} from "react"

export default function Products(){
    const [products, setProducts] = useState([]);
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
                            <div className="card" key={product.id}>
                                <img src={product.image} alt={product.title} />
                                <h2>{product.title}</h2>
                                <p className="price">{product.price}€</p>
                                <p>{product.category}</p>
                            </div>
                        ))}        
                    </div>
                </div>
            </main>
        </>
    )
}