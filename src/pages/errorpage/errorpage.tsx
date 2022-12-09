import "./errorpage.css";

export default function Errorpage(): JSX.Element {
    return( 
        <main className="error_main">
        <h1 className="error_404">
            404
        </h1>
        <p>
        Il n'y a rien à voir ici...
        </p>
        <p>
            Souhaitez-vous revenir à la <a href="http://photos.manon-antignac.com" className="navlink">page d'accueil ?</a>
        </p>
        </main>
    )
}