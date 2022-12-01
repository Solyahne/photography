import { NavLink } from "react-router-dom";
import "./categoriesphotos.css";

interface CategoriesPhotosTypes {
    link: string,
    cover: string,
    alt: string,
    description: string
}

export default function CategoriesPhotos({ cover, alt, description, link }: CategoriesPhotosTypes): JSX.Element {
    return (
        <NavLink to={`${link}`}>
            <article className="photocard">
                <img src={cover} alt={alt} className="seriecover"></img>
                <p className="seriedescription">
                    {description}
                </p>
            </article> </NavLink>
    )
}