import React, { useEffect, useState } from 'react';

import image1 from '../Rectangle.png';

const Weather = ({ latitude, longitude }) => {
  let convert = -273;
  let convert2 = 1;
  let state = true;
  const [grades, setGrades] = useState('°F');
  const [gradesValue, setGradesValue] = useState(0);
  const [presionValue, setPresionValue] = useState(0);
  const [humidityValue, setHumidityValue] = useState(0);
  const [windspeedValue, setWindspeedValue] = useState(0);
  const [cityValue, setCityValue] = useState('');
  const [countryValue, setCountryValue] = useState('');
  const [description, setDescription] = useState('');
  const [icon, setIcon] = useState('');
  const iconurl = `https://openweathermap.org/img/wn/${icon}@4x.png`;

  const changeGradesButton = () => {
    grades === '°F' ? setGrades('°C') : setGrades('°F');
    if (state) {
      convert = -459.4;
      convert2 = 0.555;
      state = !state;
    } else {
      convert = -273;
      convert2 = 1;
      state = !state;
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchApi = async () => {
    const urlAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=a1404389a7c6f24fb3ab4e06c08563e4`;
    const response = await fetch(urlAPI);
    const responseJSON = await response.json();
    console.log(responseJSON);
    console.log(urlAPI);
    setGradesValue(responseJSON.main.temp);
    setPresionValue(responseJSON.main.pressure);
    setHumidityValue(responseJSON.main.humidity);
    setWindspeedValue(responseJSON.wind.speed);
    setCityValue(responseJSON.name);
    setCountryValue(responseJSON.sys.country);
    setDescription(responseJSON.weather[0].description);
    setIcon(responseJSON.weather[0].icon);
  };

  useEffect(() => {
    fetchApi();
  }, []); //Cuando inicia la ventana o cuando se presiona el boton de buscar

  return (
    <div className=" flex flex-col items-center grow justify-center">
      <div className=" relative flex flex-col ">
        <div className=" relative z-0">
          <img src={image1} alt="fondo" />
        </div>
        <div className="parent  absolute flex grow h-full w-full text-sky-500">
          <div className="div1 flex justify-center items-center  text-8xl">
            <span>{(gradesValue / convert2 + convert).toFixed(2)}°</span>
          </div>
          <div className="flex flex-col div2 justify-center items-start  pl-2">
            <span>Presión: {presionValue}hPa</span>
            <span>Humedad: {humidityValue}%</span>
            <span>Viento: {windspeedValue}m/s</span>
          </div>
          <div className="div3 flex justify-center items-center ">
            <img src={iconurl} alt="icono clima" className="w-64" />
          </div>
          <div className="div4 flex justify-between items-center px-4 pb-2">
            <div className=" w-64 text-center">
              <span>
                {cityValue}, {countryValue}
              </span>
            </div>
            <div className="text-end">
              <span>{description}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="relative top-10">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={changeGradesButton}
        >
          <span>Cambiar a {grades}</span>
        </button>
      </div>
    </div>
  );
};

export default Weather;
