import { useState } from "react";
import "./nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

interface NavElement {
    series: string[]
}

export default function Nav({ series }: NavElement): JSX.Element {

    const [currentSerie, setCurrentSerie] = useState(0);
    const length = series.length;

    function next(): void {
        setCurrentSerie(currentSerie === length - 1 ? 0 : currentSerie + 1);
    }

    function prev(): void {
        setCurrentSerie(currentSerie === 0 ? length - 1 : currentSerie - 1);
    }

    // function nextElement() {
    //     qu'est-ce que le nextelement ? l'index de l'element 0 +1 
    // }

    return (
        <article className="nav">
            {length > 1 ? (
                <div className="gallery_arrows">
                    {/* <NavLink to {element.category}>
                        <FontAwesomeIcon icon={faChevronLeft} onClick={prev} className="arrow" />
                    </NavLink> */}
                    <div>
                        <FontAwesomeIcon icon={faChevronRight} onClick={next} className="arrow" />
                    </div>
                </div>
            ) : null}
        </article>
    )
}