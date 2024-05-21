import React, { useEffect, useRef, useState } from 'react';
import { Card, Row, Col, Typography } from 'antd';
import { PageContainer } from '@ant-design/pro-components';

const { Title } = Typography;

const API_KEY = 'AIzaSyC4pW0R1O6un6tUhogR0ZKeSRLQoOCvUxU'; // Replace with your API key
const center = { lat: 41.850033, lng: -87.6500523 };
const waypoints = [
  { location: { lat: 44.66585, lng: 28.03349 }, stopover: false },
  { location: { lat: 44.56563, lng: 27.32238 }, stopover: false },
  { location: { lat: 44.5779449, lng: 27.117297 }, stopover: false },
  { location: { lat: 44.62509, lng: 26.95591 }, stopover: false },
];

const MultiMarkersRoutesMap = ({initialCoords}) => {
  const mapRef = useRef(null);
  const [directions, setDirections] = useState(null);

  useEffect(() => {
    
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

  }, []);

  const initMap = () => {
    const map = new window.google.maps.Map(mapRef.current, {
      zoom: 18,
      center: initialCoords,
    });

    const directionsService = new window.google.maps.DirectionsService();
    const directionsRenderer = new window.google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);

    const request = {
      origin: 'Strada Remus Opreanu',
      destination: 'Piata Constitutiei',
      waypoints: waypoints,
      optimizeWaypoints: true,
      travelMode: window.google.maps.TravelMode.DRIVING,
    };

    directionsService.route(request, (result, status) => {
      if (status === window.google.maps.DirectionsStatus.OK) {
        directionsRenderer.setDirections(result);
        setDirections(result);
      } else {
        console.error('Directions request failed due to ' + status);
      }
    });
  };

  return (
    <PageContainer>
      <Row gutter={[16, 16]}>
        <Col span={16}>
          <div style={{ width: '100%', height: '80vh' }} ref={mapRef}></div>
        </Col>
        <Col span={8}>
          <Card title="Route Details">
            {directions && directions.routes[0].legs.map((leg, index) => (
              <div key={index}>
                <Title level={5}>Leg {index + 1}</Title>
                <p><strong>Start:</strong> {leg.start_address}</p>
                <p><strong>End:</strong> {leg.end_address}</p>
                <p><strong>Distance:</strong> {leg.distance.text}</p>
                <p><strong>Duration:</strong> {leg.duration.text}</p>
              </div>
            ))}
          </Card>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default MultiMarkersRoutesMap;
