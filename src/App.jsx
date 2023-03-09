import React, { useEffect, useState } from 'react';
import Header from './assets/components/Header';
import Weather from './assets/components/Weather';

const App = () => {
  const [state, setState] = useState({
    longitude: 0,
    latitude: 0,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        setState({
          longitude: position.coords.longitude.toFixed(2),
          latitude: position.coords.latitude.toFixed(2),
        });
      },
      function (error) {
        console.log(error);
      },
    );
  });

  return (
    <div className="min-h-screen flex flex-col border-red-500 border-2 justify-start items-center p-4 back">
      <div className="min-w-full flex flex-col grow border-sky-400 border-2 ">
        <Header />
        <Weather longitude={state.longitude} latitude={state.latitude} />
      </div>
    </div>
  );
};

export default App;
