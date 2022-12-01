import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./menu.css";
import Instagram from "../../assets/instagram.svg";
import Hamburger from "./hamburger";

declare module 'react' {
    interface HTMLAttributes<T> {
        open?: boolean;
    }
};

export default function Menu() {

    const [open, setOpen] = useState(false);
    function close() {
        setOpen(false);
    };

    return (
        <nav className="burger_menu" open={open}>
            {open ? (
                <>
                    <NavLink to={'/photographies'}
                        className="burger_navlink"
                        onClick={close}>
                        Photographies
                    </NavLink>

                    <NavLink to={'/'}
                        className="burger_navlink"
                        onClick={close}>
                        Me contacter
                    </NavLink>

                    <a href="https://www.instagram.com/solyahne/" className="burger_navlink" onClick={close}>
                        <img src={Instagram} alt="Lien vers instagram"></img>
                    </a>
                </> ) : ("") }

            <Hamburger open={open} setOpen={setOpen} />
        </nav>
    )
}