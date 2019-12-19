import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import api from '../../services/api';
import { Link } from 'react-router-dom'

class VerReceita extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listarReceita: [],
        }
    }


    componentDidMount() {
        this.getReceita();
    }

    getReceita = () => {

        let id = this.props.location.state.receitaId
        api.get('/receita/'+id).then(response =>
            {

                if(response.status === 200){
                    this.setState({listarReceita : [response.data] })
                    console.log(response.data)
                }
            })
    }

    render(){
        return(
        <div>
        <Header/>
                
        <section className="container_geral">

<section className="container-categorias">
    <h2>CATEGORIAS</h2>
    <div className="bar_bar"></div>
    <div className="categorias">
        <div className="align">
            <p>MASSAS</p><br></br>
            <div className="categ_5">
                <Link to = '#'></Link>
            </div>
        </div>
        <div className="align">
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
        </div>
    </div>
</section>

            <div className="direita-receita">
                <div className="banner-receita1"></div>
                <div className="receita-text1">

                    <h3 className="h3titulo">Aprenda a montar marmita gourmet</h3>
                  {
                            this.state.listarReceita.map(
                                function (vr) {
                                    return ( 
                                <div key={vr.receitaId}>
                                <p> {vr.nome}</p>
                                <h3 className="title_receit">Ingredientes</h3>
                                <p> {vr.ingredientes}</p>
                                <h3 className="title_receit">Modo de Preparo</h3>
                                <p>{vr.modoDePreparo}</p>
                                        </div>
                                    )
                                }
                            )
                        }  
                    
                </div>
            </div>
        </section>
        <Footer/>

            </div>
        );
    }
}

export default VerReceita;




