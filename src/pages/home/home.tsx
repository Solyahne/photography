import "./home.css";
import Pool from "../../assets/photos/corsicapool.jpg";
import Statue from "../../assets/photos/statueathens.jpg";
import Test from "../../assets/photos/seinecalme.jpg";

export default function Home(): JSX.Element {
  return (
    <div className="home_main">
      <div className="home_text">
        <h2>
          LE <br />MONDE<br /> EN LUMIERE<br /> ET CONTRASTE
        </h2>
        <p className="introduction">
          La photographie en noir et blanc permet de capturer notre monde d’une manière unique.
          Elle révèle des strates invisibles à l’œil nu, nous invite à voir notre environnement différemment, à se concentrer sur des détails qui seraient peut-être restés dans l’ombre.
          Elle apporte une liberté inédite, celle de s’affranchir des couleurs pour ne voir qu’en formes et jeux de contrastes. </p>
        <p>
          Le monochrome nous invite à nous concentrer sur les formes et la lumière.
          Exigeant, il demande de porter une attention toute particulière à la composition pour réaliser tout son potentiel.
          Mais la récompense est à la hauteur des efforts. Il y a une raison pour laquelle la photographie noir et blanc est toujours utilisée, pour laquelle elle survit malgré son âge.
          Ce site et les images qu’il présente sont ma maigre contribution à cet art, populaire et sans cesse renouvelé.
          J’ai eu mon premier appareil photo argentique lorsque j’étais enfant, et depuis ma collection n’a cessé de grandir, au grès de mes voyages et des évènements. Je vous invite aujourd'hui à en découvrir une partie.
        </p>
      </div>
      <div className="home_pictures">
        <div className="home_pictures_left">
          <img src={Pool} alt="pouet" className="home_picture home_picture_1"></img>
          <img src={Test} alt="" className="home_picture home_picture_3"></img>
        </div>
        <div className="home_pictures_right">
          <img src={Statue} alt="" className="home_picture home_picture_2"></img>
        </div>
      </div>
    </div>
  )
}; 