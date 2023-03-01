import React from 'react';
import { Link } from 'react-router-dom';

import './PriceCard.css';


const PriceCard = () => {
  return (
    <div className='pricing'>
        <div className="card__container">
            <div className="card">
                <h3>- БАЗОВЫЙ -</h3>
                <span className="bar"></span>
                <p className="btc">$ 100</p>
                <p>- 3 дня -</p>

                <p>- 3 страницы -</p>
                <p>- Дизайн в подарок -</p>
                <Link to='/contact' className="btn">
                    ПРЕБОРЕСТИ СЕЙЧАС
                </Link>
            </div>
            <div className="card">
                <h3>- БАЗОВЫЙ -</h3>
                <span className="bar"></span>
                <p className="btc">$ 100</p>
                <p>- 3 дня -</p>

                <p>- 3 страницы -</p>
                <p>- Дизайн в подарок -</p>
                <Link to='/contact' className="btn">
                    ПРЕБОРЕСТИ СЕЙЧАС
                </Link>
            </div>
            <div className="card">
                <h3>- БАЗОВЫЙ -</h3>
                <span className="bar"></span>
                <p className="btc">$ 100</p>
                <p>- 3 дня -</p>

                <p>- 3 страницы -</p>
                <p>- Дизайн в подарок -</p>
                <Link to='/contact' className="btn">
                    ПРЕБОРЕСТИ СЕЙЧАС
                </Link>
            </div>
        </div>
    </div>
  );
}

export default PriceCard;