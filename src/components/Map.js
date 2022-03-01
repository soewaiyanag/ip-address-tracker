import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useSelector } from "react-redux";

const Map = () => {
  const latitude = useSelector((state) => state.data.latitude ?? 0);
  const longitude = useSelector((state) => state.data.longitude ?? 0);

  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={8}
      zoomControl={false}
      doubleClickZoom={false}
      className="h-screen relative z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[latitude, longitude]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
