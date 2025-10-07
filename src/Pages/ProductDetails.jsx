import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";


export default function ProductDetails(){

    const { id } = useParams();

    const [product, setProduct] = useState();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products ${id}`)
            .then(response => response.json())
            .then(data => setProduct(data))
            .catch(error => console.error("errore nel caricamento dei prodotti:", error));
    }, [id]);

    return(
        
    )
}