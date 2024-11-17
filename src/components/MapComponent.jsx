import React, { useEffect, useRef } from "react";

const MapComponent = ({ onPolygonComplete }) => {
  const mapRef = useRef(null); // Persist the map reference
  const drawingManagerRef = useRef(null); // Persist the DrawingManager reference
  const polygonsRef = useRef([]); // Keep track of drawn polygons

  useEffect(() => {
    const initMap = () => {
      const location = new window.google.maps.LatLng(28.620585, 77.228609);
      const mapOptions = {
        zoom: 12,
        center: location,
        mapTypeId: window.google.maps.MapTypeId.ROADMAP,
      };

      // Initialize the map only once
      if (!mapRef.current) {
        mapRef.current = new window.google.maps.Map(
          document.getElementById("map-canvas"),
          mapOptions
        );

        // Initialize the DrawingManager
        drawingManagerRef.current = new window.google.maps.drawing.DrawingManager({
          drawingControlOptions: {
            position: window.google.maps.ControlPosition.TOP_CENTER,
            drawingModes: [window.google.maps.drawing.OverlayType.POLYGON],
          },
          polygonOptions: {
            clickable: true,
            draggable: false,
            editable: true,
            fillColor: "#ADFF2F",
            fillOpacity: 0.5,
          },
        });

        // Handle polygon completion
        window.google.maps.event.addListener(
          drawingManagerRef.current,
          "polygoncomplete",
          (polygon) => {
            // Add the completed polygon to the reference array
            polygonsRef.current.push(polygon);

            const path = polygon.getPath();
            const coordinates = [];
            for (let i = 0; i < path.getLength(); i++) {
              const latLng = path.getAt(i);
              coordinates.push({ lat: latLng.lat(), lng: latLng.lng() });
            }

            // Pass coordinates to the parent
            if (onPolygonComplete) {
              onPolygonComplete(coordinates);
            }

            // Disable drawing mode to retain the polygon
            drawingManagerRef.current.setDrawingMode(null);
          }
        );

        drawingManagerRef.current.setMap(mapRef.current);
      }
    };

    if (window.google && window.google.maps) {
      initMap();
    } else {
      console.error("Google Maps API not loaded!");
    }
  }, [onPolygonComplete]);

  return <div id="map-canvas" style={{ width: "95%", height: "500px" }} />;
};

export default MapComponent;
