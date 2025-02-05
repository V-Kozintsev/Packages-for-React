import React, { useEffect, useRef } from "react";
import * as YMap from "ymaps3"; // Use official import

const Map = ({ longitude, latitude }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    let mapInstance = null;

    const initMap = async () => {
      if (typeof YMap.ready !== "undefined") {
        await YMap.ready;

        const map = new YMap.YMap(mapRef.current, {
          location: {
            center: [longitude, latitude],
            zoom: 10,
          },
        });

        map.addChild(new YMap.YMapDefaultSchemeLayer());
        return map;
      } else {
        console.error(
          "YMap.ready is undefined. Check if Yandex Maps API is correctly loaded."
        );
        return null;
      }
    };

    const loadMap = async () => {
      if (longitude && latitude) {
        mapInstance = await initMap();
      }
    };

    loadMap();

    return () => {
      if (mapInstance) {
        mapInstance.destroy();
      }
    };
  }, [longitude, latitude]);

  return (
    <div
      id="map"
      className="map"
      ref={mapRef}
      style={{ width: "100%", height: "200px" }}
    ></div>
  );
};

export default Map;
