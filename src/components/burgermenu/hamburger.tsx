import "./hamburger.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface Burger {
    open: boolean,
    setOpen: Function
}


export default function Hamburger({open, setOpen}: Burger): JSX.Element {
    return (
        <button open={open} onClick={() => setOpen(!open)} className="bars" ><FontAwesomeIcon icon={faBars} className="bars" /></button>
        
    )
}

