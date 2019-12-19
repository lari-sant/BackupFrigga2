import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
/* import r1 from '../../assets/img/r1.jpg';
import r2 from '../../img/r2.jpg';
import r3 from '../../img/r3.jpg';
import p1 from '../../img/tm.png';
import p2 from '../../img/p2.png';
import p3 from '../../img/p3.png';
import p4 from '../../img/p4.png'; */
import api from '../../services/api';
import {Link} from 'react-router-dom';
import { usuarioAutenticado } from '../../services/auth';


class Home extends Component {

    constructor() {
        super()
        this.state = {
            listaReceita: [],
            listaOferta: []

        }
    }
    getReceita = () => {
        api.get('/receita')
            .then(response => {
                if (response.status === 200) {
                    this.setState({ listaReceita: response.data })
                }
                console.log(response);
            })

    }
    getOferta = () => {
        api.get('/oferta')
            .then(response => {

                if (response.status === 200) {
                    this.setState({ listaOferta: response.data })
                }
                console.log(this.state.listaOferta)
            })
    }

    componentDidMount() {
        this.getReceita();
        this.getOferta();
    }


    render() {
        var contOferta = 0;
        var contReceita = 0;
        
        return (
            <div>
                <Header/>
                <main>

                    <div className="banner">
                        <p className="bannerTitle">
                            Precisa de uma renda extra?
                        </p>
                        <p className="banner-txt">Que tal começar a vender marmitas<br />
                            feitas com produtos orgânicos? Você<br />
                            ganha uma grana extra e ainda coopera <br />
                            para um   mundo   mais   sustentável!</p>
                        <Link to="/about">
                            Saiba mais!
                        </Link>
                    </div>
                    <div className="titulos">
                        <h2>Receitas</h2>
                        <h1>Produtos recentes</h1>
                    </div>
                    <div className="container">
                         <section className="receitas">
                            {
                                this.state.listaReceita.map(
                                    function (r) {
                                        if (contReceita < 3) {
                                            contReceita++
                                            return (
                                                <Link to={'/receita'} key={r.receitaId} className="card-receita">
                                                    <img src={"http://localhost:5000/arquivos/" + r.imagemReceita} alt=''/>
                                                    <p className="position">{r.nome}</p>
                                                </Link>
                                            );
                                        }
                                    }
                                )
                            }
                            
                        </section> 


                        <section className="container-produtos">

                            {
                                this.state.listaOferta.map(
                                    function (o) {
                                        if (contOferta < 4) {
                                            contOferta++
                                            return (

                                                <div key={o.ofertaId} className="card-produto">
                                                    <img src={"http://localhost:5000/arquivos/" + o.imagemProduto} alt='' />
                                                    <div className="nav-p">
                                                        <p>{o.produto.tipo} <br /> R${o.preco}</p>
                                                        {
                                                            usuarioAutenticado()? (

                                                                <Link to="/produto">Reservar</Link>

                                                            ):(
                                                                <Link to="/Entrar">Reservar</Link>
                                                            )
                                                        }
                                                    </div>
                                                </div>
                                            );

                                        }
                                    }
                                )
                            }


                           
                        </section>



                    </div>
                </main>
                <Footer/>
            </div>
        );
    }
}
export default Home;