import React from 'react';
import { useState } from 'react';

const Header = () => {
  const iconA = 'fas fa-toggle-off text-4xl';
  const iconB = 'fas fa-toggle-on text-4xl';
  const [icon, setIcon] = useState(iconA);
  const [iconColor, seticonColor] = useState('text-white');

  const change = () => {
    icon === iconA ? setIcon(iconB) : setIcon(iconA);
    iconColor === 'text-white'
      ? seticonColor('text-gray-200')
      : seticonColor('text-white');
    backgroundcolor();
  };

  const backgroundcolor = () => {};

  return (
    <div className="">
      <nav className="flex items-center justify-between">
        <span className="text-white font-bold text-6xl">Wheater App</span>
        <div className="bg-gray-100 rounded border border-gray-200 flex items-center">
          {/* <button className="py-2 px-4 bg-white text-gray-600 rounded-l border-r border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none"
          >
            Buscar
          </button> */}
          {/* <input
            type="text"
            placeholder="Escribe una ciudad"
            className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-full"
          /> */}
        </div>
        {/* <button onClick={change} className={iconColor}>
          <i className={icon}></i>
        </button> */}
      </nav>
    </div>
  );
};

export default Header;
