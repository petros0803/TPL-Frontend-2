import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image1 from "../../Assets/Images/background.jpg";
import AnnounceHome from "../Common/AnnouncesHome/AnnounceHome";
import "./home.scss";
import dummy_data from "../Announces/announces-dummy-data.json";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Carousel
        autoPlay="true"
        infiniteLoop="true"
        interval="5000"
        showThumbs={false}
      >
        <div>
          <img src={Image1} alt="carousel" />
          <p className="legend">TPL Suceava</p>
        </div>
        <div>
          <img src={Image1} alt="carousel" />
          <p className="legend">TPL Suceava</p>
        </div>
        <div>
          <img src={Image1} alt="carousel" />
          <p className="legend">TPL Suceava</p>
        </div>
      </Carousel>

      <div className="announces--container">
        <Link to="/announces">
          <span>Cele mai recente anunturi</span>
        </Link>
        {dummy_data.announces.map(
          (elem) =>
            elem.id < 3 && (
              <div className="announces--container--ann" key={elem.id}>
                <AnnounceHome announce={elem} />
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Home;
