import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="container">
    <div className='nav-item'><Link to="#"></Link></div>
      <div className='item'><Link to="/menu">Inicio</Link></div>
      <div className="item"><Link to="/ventas">Vender</Link></div>
      <div className="item"><Link to="/corte-turno">Corte Turno</Link></div>
      <div className="item"><Link to="/corte-dia">Corte del dia</Link></div>
    </nav>
  );
};

export default Navigation;
