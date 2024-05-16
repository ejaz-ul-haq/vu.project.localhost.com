import React, { useState, useRef, useEffect } from 'react';

// Google Maps API Key (Replace 'YOUR_API_KEY' with your actual API key)
const API_KEY = 'YOUR_API_KEY';

// Initial coordinates for the map center
const initialCoords = { lat: 37.7749, lng: -122.4194 };

/**
 * https://developers.google.com/maps/documentation/javascript/advanced-markers/draggable-markers#javascript
 */


const DraggableMarkerMap = () => {
  const [markerPosition, setMarkerPosition] = useState(initialCoords);
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  // Load Google Maps API and initialize the map
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}`;
    script.async = true;
    script.onload = initMap;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const initMap = () => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: initialCoords,
      zoom: 12,
    });

    const marker = new window.google.maps.Marker({
      position: initialCoords,
      map: map,
      draggable: true,
    });

    // Set marker position in state when marker is dragged
    window.google.maps.event.addListener(marker, 'dragend', () => {
      const newPosition = {
        lat: marker.getPosition().lat(),
        lng: marker.getPosition().lng(),
      };
      setMarkerPosition(newPosition);
    });

    markerRef.current = marker;
  };

  return (
    <div style={{ width: '100%', height: '400px' }} ref={mapRef}>
      {/* Map will be rendered here */}
    </div>
  );
};

export default DraggableMarkerMap;



