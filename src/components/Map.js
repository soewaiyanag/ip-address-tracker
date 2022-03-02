import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import { useSelector } from "react-redux";
import markerIcon from "../images/icon-location.svg";

const icon = new L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon,
  iconSize: [40, 40],
});

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
      <Marker icon={icon} position={[latitude, longitude]}></Marker>
    </MapContainer>
  );
};

export default Map;
