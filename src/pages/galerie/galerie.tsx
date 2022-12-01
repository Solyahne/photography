import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpLong } from "@fortawesome/free-solid-svg-icons";
import "./galerie.css";
import photos from "../../data/photos.json";
import photocategorie from "../../data/photocover.json";
import Nav from "../../components/nav/nav";

export default function Seriepage(): JSX.Element {

    const categories = photocategorie as unknown as string[]; 

    const catUrl = useParams();
    const category = Object.values(catUrl) as unknown as string;

    const photosFound = photos.filter((i) => i.category.toLowerCase().includes(category));

    return (
        <main className="photos_main">
            {photosFound?.map((element, index) =>
                <img src={element.picture} alt={element.alt} key={index} className="photos_all"></img>
            )}
            <a href="#top_page"><FontAwesomeIcon icon={faArrowUpLong} className="arrow_top"/></a>
            {/* <Nav 
            series={categories}
            /> */}
        </main>        
    )
}