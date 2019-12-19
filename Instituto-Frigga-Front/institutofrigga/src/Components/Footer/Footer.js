import React, { Component } from 'react';
import LogoRodapeMobile from '../../assets/img/LOGO-SEM-FONTE.png'
import LogoRodapeWeb from '../../assets/img/definitivo-fundo-preto.png'
import IconFacebook from '../../assets/img/facebook.svg'
import IconInstagram from '../../assets/img/instagram.svg'
import IconTwitter from '../../assets/img/twitter.svg'
import { Link } from 'react-router-dom'

class Footer extends Component {
    render() {
        return (
            <footer>
            <div className="rodape-container">
              <p>Contato: (99) 9999-9999<br/> E-mail: instituto@frigga.com
              </p>
              <div className="logo">
                <img src={LogoRodapeMobile} alt="Ícone do Logo do instituto Frigga" className="logorodapemob"/>
                <img className="logorodapeweb" src={LogoRodapeWeb} alt=" Logo  do instituto"/>
        
              </div>
              <div className="redes">
                <Link to ="#" className="facebook">
                  <img src={IconFacebook} alt="Link para o Facebook"/>
                  <p>Facebook</p></Link>
                <Link to ="#" className="instagram">
                  <img src={IconInstagram} alt="Link para o instagram"/>
                  <p>Instagram</p></Link>
                <Link to = "#" className="twitter">
                  <img src={IconTwitter} alt="Link para o titter"/>
                  <p>Twitter</p></Link>
              </div>
            </div>
          </footer>

            );
    }
}
export default Footer;