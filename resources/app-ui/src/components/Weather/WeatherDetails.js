import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Typography, Spin, Divider } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { request } from '@umijs/max';

const { Title, Text } = Typography;
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const WeatherDetails = ({ latitude, longitude }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    request('/api/weather', {
      method: 'GET',
      params: {
        latitude: latitude,
        longitude: longitude,
      },
    })
      .then((api_response) => {
        setWeatherData(api_response);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
        setLoading(false);
      });
  }, [latitude, longitude]);

  if (loading) {
    return <Spin indicator={antIcon} />;
  }

  if (!weatherData) {
    return <div>No weather data available.</div>;
  }

  const {
    main,
    weather,
    wind,
    sys,
    visibility,
    clouds,
    dt,
    name,
    coord,
    timezone,
  } = weatherData;

  const timezoneOffset = timezone / 3600; // Convert seconds to hours
  const sunrise = new Date(sys.sunrise * 1000 + timezoneOffset * 1000).toLocaleTimeString();
  const sunset = new Date(sys.sunset * 1000 + timezoneOffset * 1000).toLocaleTimeString();
  const date = new Date(dt * 1000 + timezoneOffset * 1000).toLocaleString();

  return (
    <div style={{ padding: '20px' }}>
      <Row justify="center">
        <Col span={20}>
          <Card>
            <Row justify="center">
              <Col span={24} style={{ textAlign: 'center' }}>
                <Title level={2}>{name}</Title>
                <Text>{date}</Text>
              </Col>
            </Row>
            <Divider />
            <Row justify="center" gutter={[16, 16]}>
              <Col span={6} style={{ textAlign: 'center' }}>
                <img
  src={`http://openweathermap.org/img/wn/${weather[0]?.icon}.png`}
  alt={weather[0]?.description}
  style={{ width: 100 }}
/>
                <Title level={4}>{weather[0]?.main}</Title>
                <Text>{weather[0]?.description}</Text>
              </Col>
              <Col span={6}>
                <Text strong>Temperature: </Text>
                <Text>{main.temp}&deg;C</Text>
              </Col>
              <Col span={6}>
                <Text strong>Feels Like: </Text>
                <Text>{main.feels_like}&deg;C</Text>
              </Col>
              <Col span={6}>
                <Text strong>Humidity: </Text>
                <Text>{main.humidity}%</Text>
              </Col>
              <Col span={6}>
                <Text strong>Pressure: </Text>
                <Text>{main.pressure} hPa</Text>
              </Col>
              <Col span={6}>
                <Text strong>Visibility: </Text>
                <Text>{visibility / 1000} km</Text>
              </Col>
              <Col span={6}>
                <Text strong>Cloudiness: </Text>
                <Text>{clouds.all}%</Text>
              </Col>
              <Col span={6}>
                <Text strong>Wind Speed: </Text>
                <Text>{wind.speed} m/s</Text>
              </Col>
              <Col span={6}>
                <Text strong>Wind Direction: </Text>
                <Text>{wind.deg}&deg;</Text>
              </Col>
              <Col span={6}>
                <Text strong>Sunrise: </Text>
                <Text>{sunrise}</Text>
              </Col>
              <Col span={6}>
                <Text strong>Sunset: </Text>
                <Text>{sunset}</Text>
              </Col>
              <Col span={6}>
                <Text strong>Dew Point: </Text>
                <Text>{main.temp_min}&deg;C</Text>
              </Col>
              <Col span={6}>
                <Text strong>UV Index: </Text>
                <Text>N/A</Text> {/* UV Index is not available in current data */}
              </Col>
              <Col span={6}>
                <Text strong>Latitude: </Text>
                <Text>{coord.lat}</Text>
              </Col>
              <Col span={6}>
                <Text strong>Longitude: </Text>
                <Text>{coord.lon}</Text>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default WeatherDetails;
