/* global L */

import { useEffect } from "react";

const Map = () => {
  useEffect(() => {
    var map = L.map("map", { zoomControl: false, control: true }).setView(
      [51.505, -0.09],
      13
    );

    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic29ld2FpeWFuYXVuZyIsImEiOiJjbDAzYTRweHgwYTZtM2JtanhieHN0YnY1In0.YtLm-aIA8zz3H0LLrSVogA",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',

        id: "mapbox/streets-v11",
      }
    ).addTo(map);

    L.marker([51.5, -0.09]).addTo(map);
  }, []);

  return <div id="map" className="h-screen relative -z-10"></div>;
};

export default Map;
