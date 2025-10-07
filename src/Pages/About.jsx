import { Link } from "react-router-dom";

export default function About() {
    return(
        <>
            <div className="title-container">
                <h1>Un gruppo di scappati di casa</h1>
                <p className="subtitle">Torna alla <Link to="/" className="navlink-go">Home</Link></p>
            </div>
        </>
    )
}