import "./home.css";
import Pool from "../../assets/photos/corsicapool.jpg";
import Statue from "../../assets/photos/statueathens.jpg";
import Test from "../../assets/photos/seinecalme.jpg";

export default function Home(): JSX.Element {
  return (
    <div className="home_main">
      <div className="home_text">
        <h2>
          LE <br />MONDE<br /> EN LUMIERE<br /> ET CONTRASTES
        </h2>
        <p className="introduction">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus fermentum varius neque nec ultrices. Pellentesque non facilisis est, commodo dictum lorem.
          Aliquam eget turpis vel sem mattis imperdiet.
          Fusce consequat suscipit mauris, in porttitor libero consequat at. Nunc pellentesque metus eget iaculis auctor.
          Vivamus eget turpis sit amet odio pharetra lacinia.
          Aliquam scelerisque auctor risus, rutrum consequat est commodo tempor. Praesent eu ipsum lorem.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus fermentum varius neque nec ultrices. Pellentesque non facilisis est, commodo dictum lorem.
          Aliquam eget turpis vel sem mattis imperdiet.</p>
        <p>
          Fusce consequat suscipit mauris, in porttitor libero consequat at. Nunc pellentesque metus eget iaculis auctor.
          Vivamus eget turpis sit amet odio pharetra lacinia.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus fermentum varius neque nec ultrices. Pellentesque non facilisis est, commodo dictum lorem.
          Aliquam eget turpis vel sem mattis imperdiet.
          Fusce consequat suscipit mauris, in porttitor libero consequat at. Nunc pellentesque metus eget iaculis auctor.
          Vivamus eget turpis sit amet odio pharetra lacinia.
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