import { useContext, useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import IPAddressContext from "../context/IPAddressContext";

function apiURL(ipaddress) {
  const corsPrefix = "https://guarded-gorge-60452.herokuapp.com/";
  return `${corsPrefix}https://api.ip2location.com/v2/?ip=${ipaddress}&key=SW9NI7ZYHS&package=WS12`;
}

const Map = () => {
  const { IPAddress } = useContext(IPAddressContext);
  const [coordinate, setCoordinate] = useState([0, 0]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(apiURL("8.8.8.8"));
      const data = await response.json();

      console.log(data);
    }
    fetchData();
  }, [coordinate]);

  return (
    <MapContainer
      center={[1, 1]}
      zoom={8}
      zoomControl={false}
      className="h-screen relative z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[1, 1]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
