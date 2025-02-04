//src/components/Map.jsx
import React, { useRef, useEffect } from "react";
import * as ymaps3 from "ymaps3";
import { useSelector } from "react-redux";

const Map = () => {
  const mapRef = useRef(null);
  const weather = useSelector((state) => state.weather);
  const defaultLongitude = 37.618423;
  const defaultLatitude = 55.751244;

  let map;

  const longitude = weather?.lon;
  const latitude = weather?.lat;

  useEffect(() => {
    const initMap = async () => {
      await ymaps3.ready;
      const { YMap, YMapDefaultSchemeLayer } = ymaps3;
      const currentLongitude =
        longitude !== undefined ? longitude : defaultLongitude;
      const currentLatitude =
        latitude !== undefined ? latitude : defaultLatitude;

      if (mapRef.current) {
        if (mapRef.current.map) {
          mapRef.current.map.update({
            location: {
              center: [currentLongitude, currentLatitude],
              zoom: 10,
            },
          });
        } else {
          map = new YMap(mapRef.current, {
            location: {
              center: [currentLongitude, currentLatitude],
              zoom: 10,
            },
          });
          map.addChild(new YMapDefaultSchemeLayer());
          mapRef.current.map = map;
        }
      }
    };
    initMap();
    return () => {
      if (mapRef.current?.map) {
        mapRef.current.map.destroy();
        mapRef.current.map = null;
      }
    };
  }, [longitude, latitude]);

  return (
    <div
      id="map"
      className="map"
      ref={mapRef}
      style={{ width: "100%", height: "400px" }}
    ></div>
  );
};

export default Map;
