import { useState } from "react";
import "./gallery.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

interface GalleryElement {
    pictures: string[]
}

export default function Gallery({ pictures }: GalleryElement): JSX.Element {

    const [currentImg, setCurrentImg] = useState(0);
    const length = pictures.length;

    // Si l'image est la dernière (longueur du tableau -1, car la numérotation commence à 0)
    // alors on renvoie à la première (0). Sinon on incrémente pour passer à la suivante
    function next(): void {
        setCurrentImg(currentImg === length - 1 ? 0 : currentImg + 1);
    }

    // Si l'image actuelle est la première (numérotée 0), 
    // on passe à la dernière avec longueur du tableau -1 pour avoir le bon index. 
    // Sinon on passe à la précédente en décrémentant
    function prev(): void {
        setCurrentImg(currentImg === 0 ? length - 1 : currentImg - 1);
    }

    const [open, setOpen] = useState(true);
    function show() {
        setOpen(!open);
    }

    return (
        <article className="gallery">
            {pictures.map((image, index) => {
                return (
                    <main>
                        {open && <div key={index}>
                            {index === currentImg && (
                                <img src={image} alt='' className='gallery_photo' onClick={show} />
                            )}
                        </div>}

                    </main>
                )
            })}
            {open && length > 1 ? (
                <div className="gallery_arrows">
                    <div>
                        <FontAwesomeIcon icon={faChevronLeft} onClick={prev} className="arrow" />
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faChevronRight} onClick={next} className="arrow" />
                    </div>
                </div>
            ) : null}
        </article>
    )
}