import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import ArtistCard from "./components/artist-card";

function App() {
  return (
    <div className="container">
      <div className="row">
        <ArtistCard
          img="https://cdns-images.dzcdn.net/images/artist/7c8fb9b4135ea113a18d7380686bc764/500x500.jpg"
          titulo="Soda Stereo"
        />
        <ArtistCard
          img="https://c-cl.cdn.smule.com/rs-s24/arr/89/35/30bfcc7c-9490-4d7b-89e7-164133c5e74a.jpg"
          titulo="Charly Garcia"
        />
        <ArtistCard
          img="https://pbs.twimg.com/profile_images/3683525657/7caa5c02f653113c03886c1703295749.jpeg"
          titulo="Sumo"
        />
        <ArtistCard
          img="https://pbs.twimg.com/profile_images/378800000724582737/d85daae7c8166138525dafc39a373d7e.jpeg"
          titulo="Spinetta"
        />
      </div>
    </div>
  );
}

export default App;
