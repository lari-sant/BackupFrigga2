import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import aimg from '../../assets/img/q.jpg';
import aimg1 from '../../assets/img/9.jpg';
import aimg2 from '../../assets/img/negocio.jpg';
import aimg3 from '../../assets/img/4.jpg';
import aimg4 from '../../assets/img/66.jpg';
import aimg5 from '../../assets/img/marmita.jpg';
import {Link} from 'react-router-dom'




class About extends Component {

    render() {
        
        return (

            <div>
                

                <Header />
                <section className="container-assunto1">
                    <div>
                        <img src={aimg} alt="Mulher segurando morango" />
                    </div>
                    <div className="divAboutTitle">
                        <h1 className="aboutTitle">Quem Somos</h1>
                        <p>

                            O Instituto Frigga é uma iniciativa que nasceu
                             de uma fusão<br/> de ONGS e Cooperativas  e tem como
                            objetivo democratizar<br/> o acesso à produtos orgânicos
                            e ajudar pessoas de baixa renda!
                            </p>
                    </div>
                </section>

                <section className="container-assunto1 container-assunto2">
                    <div className="divAboutTitle">
                        <h2 className="aboutTitle">Um pouco mais sobre o projeto social </h2>
                        <p>
                        Nós sabemos como é dificil dar o primeiro passo,
                        por isso pensamos<br/> em uma solução para você que
                        deseja iniciar algo novo<br/> e precisa de um empurrãozinho!
                        Nós lhe fornecemos um kit inicial<br/>para você começar suas vendas!
                        <br/><br/><br/>Entre em contato conosco pelo email: institutofrigga@email.org.br
                       </p>
                    </div>
                    <div>
                        <img src={aimg1} alt="Laranjeira" />
                    </div>
                </section>


                <section className="container-assunto1">
                    <div>
                        <img src={aimg2} alt="homem segurando tablet" />
                    </div>
                    <div className="divAboutTitle">
                        <h2 className="aboutTitle">Nosso diferencial</h2>
                        <p>
                        Aqui os pequenos produtores tem espaço! Todo nosso estoque<br/>
                        é fornecido por pessoas que acreditam e contribuem
                        para um<br/> mundo mais sustentável! Produtos de qualidade
                        por um preço<br/> que cabe no seu bolso. <Link to="/entrar"> Faça parte disso!</Link>
                       </p>
                    </div>

                </section>

                <section className="container-depoimento">
                    <div className="depoimento">
                    <img src={aimg3} alt="Pessoas que participaram do projeto"/>
                    <h3>Depoimentos</h3>
                    </div>
                </section>

                <section className="container-galeria-texto">
                    <h3>Galeria</h3>
                    <div className="container-galeria">
                        <div className="esquerda-galeria"></div>

                        <div className="direita-galeria">
                            <img src={aimg4} alt="Mulher" />
                            <img src={aimg5} alt="Marmita" />
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
}
export default About;