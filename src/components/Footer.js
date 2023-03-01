import React from 'react';

import './Footer.css';
import {FaHome, FaPhone, FaMailBulk, FaInstagram, FaTwitter, FaFacebook} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer__container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:'#fff', marginRight:'16px'}}/>
                    <p>Kazahstan Almaty</p>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color:'#fff', marginRight:'16px'}}/>
                    +7 707 777 7153
                    </h4>
                </div>
                <div className="mail">
                    <h4><FaMailBulk size={20} style={{color:'#fff', marginRight:'16px'}}/>
                    buttinpavel@gmail.com
                    </h4>
                </div>
            </div>
            <div className="right">
                <h4>О нашей компании.</h4>
                <p>Меня зовут Бутин Павел, я Front-end разработчик на React JS, 
                Вы можете найти меня тут.</p>
                <div className="social">
                    <FaFacebook size={20} style={{color:'#fff', marginRight:'20px'}} />
                    <FaInstagram size={20} style={{color:'#fff', marginRight:'20px'}} />
                    <FaTwitter size={20} style={{color:'#fff', marginRight:'20px'}} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;