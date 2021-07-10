import React from "react";
import "./artist-card.css";

class ArtistCard extends React.Component {
  render() {
    return (
      <div className="item">
        <img
          src="https://cdns-images.dzcdn.net/images/artist/7c8fb9b4135ea113a18d7380686bc764/500x500.jpg"
          alt=""
          className="pic"
        />
        <p className="titulo">Soda Stereo</p>
      </div>
    );
  }
}
export default ArtistCard;
