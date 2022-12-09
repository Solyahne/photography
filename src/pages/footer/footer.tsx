import { NavLink } from "react-router-dom";
import "./footer.css";

export default function Footer(): JSX.Element {
    return (
        <footer>
            © 2022 Manon Antignac <span className="display_mobile">|</span>
            <NavLink to={'/mentionslegales'}
                className="footerlink">
                <br className="br_mobile"/>Mentions légales
            </NavLink>
        </footer>
    )
}