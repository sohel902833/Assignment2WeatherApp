import React from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { Button, Typography } from "@mui/material";
interface Props {}
interface ParamsType {
  countryName: string;
}
interface Country {
  capital: string[];
  population: number;
  latlng: number[];
  flags: {
    png: string;
    svg: string;
  };
}

interface CapitalWeather {
  current: {
    wind_speed: number;
    precip: number;
    temperature: number;
    weather_icons: string[];
  };
}

function CountryDetails(props: Props) {
  const {} = props;

  const { countryName } = useParams<ParamsType>();

  const [countryDetails, setCountryDetails] = React.useState<Country>();
  const [capitalWeather, setCapitalWeather] = React.useState<CapitalWeather>();

  React.useEffect(() => {
    getCountryDetails();
  }, []);

  const getCountryDetails = async () => {
    Axios.get(`https://restcountries.com/v3.1/name/${countryName}`)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data[0]);
          setCountryDetails(res.data[0]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getCapitalWeather = async () => {
    Axios.get(
      `http://api.weatherstack.com/current?access_key=b2ffff21d3ba1d0b04e1e1ca2f278858&query=${countryDetails?.capital[0]}`
    )
      .then((res) => {
        if (res.status === 200) {
          setCapitalWeather(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      data-testid="countryDetails"
      style={{ width: "500px", margin: "0 auto" }}
    >
      <Typography variant="h4">
        Capital: {countryDetails?.capital[0]}
      </Typography>
      <Typography variant="h4">
        Population: {countryDetails?.population}
      </Typography>
      <Typography variant="h4">
        Lat Lng: {countryDetails?.latlng[0]} , {countryDetails?.latlng[1]}
      </Typography>
      <img src={countryDetails?.flags.png} alt="" />
      <br />
      <Button onClick={() => getCapitalWeather()} variant="contained">
        Capital Weather
      </Button>
      <Typography variant="h4">
        Wind Speed: {capitalWeather?.current?.wind_speed}
      </Typography>
      <Typography variant="h4">
        Precip: {capitalWeather?.current?.precip}
      </Typography>
      <Typography variant="h4">
        Temperature: {capitalWeather?.current?.temperature}
      </Typography>

      <img src={capitalWeather?.current.weather_icons[0]} alt="" />
      <br />
    </div>
  );
}

export default CountryDetails;
