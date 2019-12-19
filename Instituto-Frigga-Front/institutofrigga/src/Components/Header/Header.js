import React, { Component } from 'react';
import LogoWeb from '../../assets/img/definitivo-fundo-preto.png';
import { Link, withRouter } from 'react-router-dom';
import { usuarioAutenticado, parseJwt } from '../../services/auth';


class Header extends Component {

    logout = () => {
        var exit = window.confirm("Deseja mesmo sair?")

        if (exit === true) {
            localStorage.removeItem("usuario-frigga")
            this.props.history.push("/entrar")
            window.alert("Volte sempre!")
        } else {

        }
    }
    render() {
        return (

            <header>
                {/* <div className="logo">
                     <button className="botao-menu" type="menu" id="bt_menu"><img src={MenuSanduiche}
                        alt="Ícone de Menu" />
                        <p>MENU</p>
                    </button> 
                    <img className="logorodapeweb" src={LogoWeb} alt=" Logo  do instituto" />
                    <img className="logohmob" src={LogoMob} alt="logo do instituto" />
                </div>
                <nav>
                    {usuarioAutenticado() ? (
                        //  <div className="navbar-container">
                         <div className="navbar">
                             <ul className="menu">
                                 <Link to ="/">Home</Link>
                                 <Link to ="/produtos">Produtos</Link>
                                 <Link to ="/receitas">Receitas</Link>
                                 <Link to ="/about">Quem Somos</Link>
                             </ul>
                             <div className="menu2">
                                <Link to ="/perfil">Perfil</Link>
                                <Link style={{
                                    backgroundColor: 'white',
                                    color: 'black' }} onClick={this.logout} to ="/entrar">SAIR</Link>
                             </div>
                         </div>
                    //  </div>
                    ):(
                        // <div className="navbar-container">
                        <div className="navbar">
                            <ul className="menu">
                                <Link to ="/">Home</Link>
                                <Link to ="/produtos">Produtos</Link>
                                <Link to ="/receitas">Receitas</Link>
                                <Link to ="/about">Quem Somos</Link>
                            </ul>
                            <div className="menu2">
                            <Link to ="/entrar">Perfil</Link>
                            <Link to ="/entrar">Entrar</Link>
                            </div>
                        </div>
                    // </div>
                    )

                    }
                </nav>  */}

                <div className="menu_global">
                    <input type="checkbox" id="btt_menu" />
                    <label htmlFor="btt_menu">&#9776;</label>
                    {usuarioAutenticado() && parseJwt().Role === "1" ? (
                        <nav className="menuzao_ttl">
                            <ul className="menuzao_1">
                                <Link to="/perfil" className="painel_menu">Painel</Link>
                                <Link to="/">Home</Link>
                                <Link to="/produtos">Produtos</Link>
                                <Link to="/receitas">Receitas</Link>
                                <Link to="/about">Quem Somos</Link>
                            </ul>
                            <ul className="menuzao_2">
                            <i className="fas fa-user-circle"></i>
                                <div className="divPHeader">
                                    <p className="pHeader">{`Bem vindo: ${parseJwt().Nome}`}</p>
                                </div>

                                <Link to="/perfil">Painel</Link>
                                <Link style={{
                                    backgroundColor: 'white',
                                    color: 'black'
                                }} onClick={this.logout} to="/entrar">SAIR</Link>
                            </ul>
                        </nav>
                    ) : (usuarioAutenticado() && parseJwt().Role === "3" ? (
                        <nav className="menuzao_ttl">
                            <ul className="menuzao_1">
                                <Link to="/">Home</Link>
                                <Link to="/produtos">Produtos</Link>
                                <Link to="/receitas">Receitas</Link>
                                <Link to="/about">Quem Somos</Link>
                            </ul>
                            
                            <ul className="menuzao_2">
                            <i className="fas fa-user-circle"></i>
                                <div className="divPHeader">
                                    <p className="pHeader">{`Bem vindo:${parseJwt().Nome}`}</p>
                                </div>
                                <Link to="/perfil">Painel</Link>
                                <Link style={{
                                    backgroundColor: 'white',
                                    color: 'black'
                                }} onClick={this.logout} to="/entrar">SAIR</Link>
                            </ul>
                        </nav>
                    ) : (
                            usuarioAutenticado() && parseJwt().Role === "2" ? (
                                <nav className="menuzao_ttl">
                                    <ul className="menuzao_1">
                                        <Link to="/">Home</Link>
                                        <Link to="/produtos">Produtos</Link>
                                        <Link to="/receitas">Receitas</Link>
                                        <Link to="/about">Quem Somos</Link>
                                    </ul>
                                    <ul className="menuzao_2">

                                    <i className="fas fa-user-circle"></i>
                                        <div className="divPHeader">
                                            <p className="pHeader">{`Bem vindo:${parseJwt().Nome}`}</p>
                                        </div>
                                        <Link to="/perfil">MinhasReceitas</Link>
                                        <Link style={{
                                            backgroundColor: 'white',
                                            color: 'black'
                                        }} onClick={this.logout} to="/entrar">SAIR</Link>
                                    </ul>
                                </nav>
                            ) : (
                                    <nav className="menuzao_ttl">
                                        <ul className="menuzao_1">
                                            <Link to="/">Home</Link>
                                            <Link to="/produtos">Produtos</Link>
                                            <Link to="/receitas">Receitas</Link>
                                            <Link to="/about">Quem Somos</Link>
                                        </ul>
                                        <ul className="menuzao_2">

                                            <Link to="/entrar">Entrar</Link>
                                        </ul>
                                    </nav>
                                )

                        ))
                    }
                </div>
                {usuarioAutenticado() ? (
                    <div className="logotipo_fri">
                        
                        <img className="logotipo_header" src={LogoWeb} alt=" Logo  do instituto" />
                        <Link to="/entrar" onClick={this.logout}>Sair</Link>
                    </div>
                ) : (
                        <div className="logotipo_fri">
                            <img className="logotipo_header" src={LogoWeb} alt=" Logo  do instituto" />
                            <Link to="/entrar">Entrar</Link>
                        </div>
                    )}
            </header>
        );
    }
}
export default withRouter(Header);
