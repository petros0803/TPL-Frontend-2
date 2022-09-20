import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image1 from "../../Assets/Images/background.jpg";
import "./gallery.scss";

const Gallery = () => {
  return (
    <div>
      <div className="gallery--title">Galerie foto</div>
      <Carousel autoPlay="true" infiniteLoop="true" interval="5000">
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
    </div>
  );
};

export default Gallery;
