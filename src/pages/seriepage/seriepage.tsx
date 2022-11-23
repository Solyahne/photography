import { useParams } from "react-router-dom";
import "./seriepage.css";
import photos from "../../data/photos.json";
import Gallery from "../../components/gallery/gallery";

export default function Seriepage(): JSX.Element {

    const catUrl = useParams();
    const category = Object.values(catUrl) as unknown as string;

    const photosFound = photos.filter((i) => i.category.toLowerCase().includes(category));
    const pictures = photosFound.map((element) => element.picture);

    console.log(pictures);

    return (
        <main className="photos_main">
            {/* {photosFound?.map((element, index) =>
                <img src={element.picture} alt={element.alt} key={index} className="photos_all"></img>
            )} */}
                <Gallery 
                pictures={pictures}/> 

        </main>
    )
}