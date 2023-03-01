import React from 'react';
import background from '../assets/background.png';
import { Link } from 'react-router-dom';
import './Intro.css';

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro__mask">
          <img className="intro_img" src={background} alt="background" />
      </div>
      <div className="content">
        <p>Привет я фрилансер.</p>
        <h1>React-Developer.</h1>
        <div className="button">
        <Link to="/project" className="btn">Проекты</Link>
        <Link to="/contact" className="btn btn-light">Контакты</Link>
      </div>
      </div>
    </div>
  );
}

export default Intro;