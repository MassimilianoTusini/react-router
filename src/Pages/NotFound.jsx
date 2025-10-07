import { Link } from "react-router-dom";

export default function NotFound(){
    return(
        <div className="nf-cont">
            <h1>404</h1>
            <p>Ops, qualcosa è andato storto</p>
            <Link to="/" className="back-btn">Torna alla Home</Link>
        </div>
    );
}