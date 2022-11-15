import { NavLink } from "react-router-dom";
import "./footer.css";

export default function Footer(): JSX.Element {
    return (
        <footer>
            © 2022 Manon Antignac |
            <NavLink to={'/mentionslegales'}
                className="footerlink">
                Mentions légales et politique de confidentialité
            </NavLink>
        </footer>
    )
}