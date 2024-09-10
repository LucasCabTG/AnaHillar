import { AiOutlineInstagram } from "react-icons/ai";
import '../styles/footer.css'

export function Footer() {
    return (
        <>
            <footer>
                <div className="footer-social">
                    <a href="https://www.instagram.com/anahillar?igsh=MTRjNGVrZHdpeW8wNQ%3D%3D" target="_blank" rel="noreferrer"><AiOutlineInstagram /></a>
                </div>
                <div className="footer-copy">
                    <p>© 2024 Copyright: <a href="Caballerolucas.com" target="_blank" rel="noreferrer">Lucas Caballero</a></p>
                </div>
            </footer>    
        </>
    )
}
