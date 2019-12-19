import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { api } from '../../services/api';
//import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";


class Receita extends Component {

    constructor() {
        super();
        this.state = {
            listaCategoriaReceita: [],
            listarReceita: [],
            setStateFiltro: "",
            setStateTodos: ""
        }
    }

    componentDidMount() {
        this.getCategoriaReceita();
        this.getReceita();
        this.getFiltro();
    }

    getCategoriaReceita = () => {
        api.get('/categoriareceita').then(response => {
            if (response.status === 200) {
                this.setState({ listaCategoriaReceita: response.data })
                console.log(response)
            }
        })
    }

    getReceita = () => {
        api.get('/receita').then(response => {
            if (response.status === 200) {
                this.setState({ listarReceita: response.data })
            }
        })
    }
    getFiltro = () => {
        if (this.atualizaSelect.value === "Todos") {
            console.log(this.getReceita)
        } else {
            api.get('/categoriareceita' + this.state.setStateFiltro)
                .then(response => {
                    if (response.status === 200) {
                        this.setState({ listaCategoriaReceita: response.data })
                    }
                })
        }
    }
    atualizaSelect = (value) => {
        this.setState({ setStateFiltro: value })
        setTimeout(() => {
            this.getFiltro(this.state.filtroreceita)

        }, 500);
    }
    filtrarListaPorCategoria = (idCategoria) => {
        console.log("Id Categoria: ", idCategoria);
        api.get("/filtro/filtroreceita/" + idCategoria)
            .then(response => {
                this.setState({ listarReceita: response.data });
            })
            .catch(erro => console.log("Deu erro na busca de ofertas por id categoria: ", erro))
    }


    render() {
        return (

            <div>
                <Header />
                <section className="container_geral">
                    <section className="container-categorias">
                        <h2>CATEGORIAS</h2>
                        <div className="bar_bar"></div>
                        <div className="categorias">
                            {
                                this.state.listaCategoriaReceita.map(lr => {
                                    return (
                                        <div className="align">
                                            <p>{lr.tipoReceita}</p><br></br>
                                            <div className="categ_1" onClick={() => this.filtrarListaPorCategoria(lr.categoriaReceitaId)}>

                                            </div>
                                        </div>

                                    )
                                }
                                )
                            }
                            {/* <div className="align">
                                <p>SOPAS</p><br></br>
                                <div className="categ_6">
                                <Link to = '#'></Link>
                                </div>
                            </div>
                            <div className="align">
                                <p>SALADAS</p><br></br>
                                <div className="categ_7">
                                <Link to = '#'></Link>
                                </div>
                            </div>
                            <div className="align">
                                <p>SOBREMESA</p><br></br>
                                <div className="categ_8">
                                <Link to = '#'></Link>
                                </div>
                            </div> */}
                        </div>
                    </section>

                    <section className="container-receitas">

                        <h3 className="receita-la">Cantinho das Receitas</h3>

                        {
                            this.state.listarReceita.map(
                                function (r) {
                                    return (
                                        <div key={r.receitaId} className="card_receitas card_receitas_lari">
                                            <img src={"http://localhost:5000/Arquivos/" + r.imagemReceita} alt='' />
                                            <div className="nav-r">
                                                <p>{r.nome}</p>
                                                <Link to={{ pathname: '/verreceita', state: { receitaId: r.receitaId } }} >Leia mais</Link>
                                            </div>
                                        </div>
                                    )
                                }
                            )
                        }

                        {/* <div className="card_receitas">
                            <img src={rimg} alt="imagem de salada de queijo" />
                            <div className="nav-r">
                                <p> Salada com queijo...</p>
                                <Link to="/verreceita" href="receita-2.html" title="login">Leia mais</Link>
                            </div>
                        </div>
                        <div className="card_receitas">
                            <img src={rimg1} alt="imagem de frango" />
                            <div className="nav-r">
                                <p>Frango em Crosta de Chia...</p>
                                <Link to="/verreceita" href="receita-2.html" title="login">Leia mais</Link>
                            </div>
                        </div>
                        <div className="card_receitas">
                            <img src={rimg2} alt="imagem de bolo de carne de frango com chia" />
                            <div className="nav-r">
                                <p>Bolo de carne de frango com chia...</p>
                                <Link to="/verreceita" href="receita-2.html" title="login">Leia mais</Link>
                            </div>
                        </div>
                        <div className="card_receitas">
                            <img src={rimg3} alt="imagem de coxinha Fitness" />
                            <div className="nav-r">
                                <p>Coxinha Fitness...</p>
                                <Link to="/verreceita" href="receita-2.html" title="login">Leia mais</Link>
                            </div>
                        </div>
                        <div className="card_receitas">
                            <img src={rimg4} alt="imagem de salada de queijo" />
                            <div className="nav-r">
                                <p>Salada com queijo...</p>
                                <Link to="/verreceita" href="receita-2.html" title="login">Leia mais</Link>
                            </div>
                        </div>
                        <div className="card_receitas">
                            <img src={rimg5} alt="imagem de frango" />
                            <div className="nav-r">
                                <p>Frango em Crosta de Chia...</p>
                                <Link to="/verreceita" href="receita-2.html" title="login">Leia mais</Link>
                            </div>

                        </div> */}


                    </section>
                </section>
                <Footer />
            </div>

        );
    }
}


export default Receita;


