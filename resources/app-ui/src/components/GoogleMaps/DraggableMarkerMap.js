import React, { useState, useRef, useEffect } from 'react';

// Google Maps API Key (Replace 'YOUR_API_KEY' with your actual API key)
const API_KEY = 'AIzaSyC4pW0R1O6un6tUhogR0ZKeSRLQoOCvUxU';

const DraggableMarkerMap = ({ initialCoords, onPositionChange }) => {

  // Convert initialCoords to numbers
  // const coords = {
  //   lat: parseFloat(initialCoords.lat),
  //   lng: parseFloat(initialCoords.lng)
  // };

  // const [initialCoords, setInitialCoords] = useState(coords);
  const [markerPosition, setMarkerPosition] = useState(initialCoords);
  const mapRef = useRef(null);

  useEffect(() => {
    console.log('initialCoords - from - inner');
    console.log(initialCoords);

    if(initialCoords.length == 0 ){
      console.log('initialCoords.length - case - 01');
      return;
    }else{
      console.log('initialCoords.length - case - 02');
    }

    const loadGoogleMapsScript = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap&libraries=geometry,marker`;
      script.async = true;
      script.defer = true;
      window.initMap = initMap;
      document.head.appendChild(script);

      script.onerror = () => {
        console.error('Error loading Google Maps script');
      };

      return () => {
        if (script) {
          document.head.removeChild(script);
        }
      };
    };

    if (!window.google) {
      console.log('initialCoords - from - inner - case 01');
      loadGoogleMapsScript();
    } else {
      console.log('initialCoords - from - inner - case 02');
      initMap();
    }
  }, [initialCoords]);

  const initMap = () => {
    if (!mapRef.current) return;

    const map = new window.google.maps.Map(mapRef.current, {
      center: initialCoords,
      zoom: 18
    });

    const marker = new window.google.maps.Marker({
      position: initialCoords,
      map: map,
      draggable: true,
    });

    marker.addListener('dragend', () => {
      const newPosition = {
        lat: marker.getPosition().lat(),
        lng: marker.getPosition().lng(),
      };
      console.log('Marker dragged to:', newPosition);
      setMarkerPosition(newPosition);
      if (onPositionChange) {
        onPositionChange(newPosition);
      }
    });
  };

  return (
    <div style={{ width: '100%', height: '400px' }} ref={mapRef}>
      {/* Map will be rendered here */}
    </div>
  );
};

export default DraggableMarkerMap;
