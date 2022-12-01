import "./hamburger.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

interface Burger {
    open: boolean,
    setOpen: Function
}


export default function Hamburger({ open, setOpen }: Burger): JSX.Element {
    return (
        <button open={open} onClick={() => setOpen(!open)} className="bars" >
            {open ? (<FontAwesomeIcon icon={faXmark} className="baropen bars" />): 
            (<FontAwesomeIcon icon={faBars} className="barclose bars" />) }

        </button>

    )
}

