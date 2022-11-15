import { NavLink } from "react-router-dom";
import "./photoseries.css";

interface PhotoSeriesElement {
    cover: string,
    alt: string,
    description: string
}

export default function PhotoSeries({ cover, alt, description }: PhotoSeriesElement): JSX.Element {
    return (
        <NavLink to={"/"}>
            <article className="photocard">
                <img src={cover} alt={alt} className="seriecover"></img>
                <p className="seriedescription">
                    {description}
                </p>
            </article> </NavLink>
    )
}