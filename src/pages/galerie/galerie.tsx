import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpLong } from "@fortawesome/free-solid-svg-icons";
import "./galerie.css";
import photos from "../../data/photos.json";
import Modal from "../../components/modal/modal";
import useModal from "../../components/modal/useModal";

export default function Seriepage(): JSX.Element {

    const { isOpen, toggle, imageSelected } = useModal();

    const catUrl = useParams();
    const category = Object.values(catUrl) as unknown as string;

    const photosFound = photos.filter((i) => i.category.toLowerCase().includes(category));

    return (
        <main className="photos_main">
            {photosFound?.map((element, index) =>
                <>
                <img src={element.picture} alt={element.alt} key={index} className="photos_all" onClick={toggle}></img>
                </>
            )}
            <a href="#top_page"><FontAwesomeIcon icon={faArrowUpLong} className="arrow_top"/></a>
            {imageSelected &&
            <Modal isOpen={isOpen} toggle={toggle} imageSelected={imageSelected} />}
        </main>        
    )
}