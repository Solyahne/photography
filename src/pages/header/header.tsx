import { NavLink } from "react-router-dom";
import Instagram from "../../assets/instagram.svg";
import "./header.css"; 

export default function Header() {
    return (
        <div className="header">
            <h1>
                MANON ANTIGNAC
            </h1>
            <nav>
                <NavLink to={'/'}
                    className={({ isActive }) =>
                        isActive ? "navlink link-active" : "navlink"}>
                    Photographies
                </NavLink>

                <NavLink to={'/'}
                    className={({ isActive }) =>
                        isActive ? "navlink link-active" : "navlink"}>
                    Me contacter
                </NavLink>

                <NavLink to={'https://www.instagram.com/solyahne/'}
                    className={({ isActive }) =>
                        isActive ? "navlink link-active" : "navlink"}>
                    <img src={Instagram} alt="Lien vers instagram"></img>
                </NavLink>

            </nav>
        </div>
    )
}