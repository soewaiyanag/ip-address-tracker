import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Header from "./components/Header";
import Map from "./components/Map";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <MapContainer
        center={[51.505, -0.09]}
        zoom={20}
        className="h-screen relative z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default App;
