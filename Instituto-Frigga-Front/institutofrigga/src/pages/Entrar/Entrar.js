import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import IconLogin from '../../assets/img/iconperfil.svg';
import api, { apiViaCep } from '../../services/api';
import { parseJwt } from '../../services/auth';
import Modal from 'react-responsive-modal';


class Entrar extends Component {
  constructor() {
    super()
    this.state = {
      email: "",
      senha: "",

      emailCadastro: "",
      senhaCadastro: "",

      tipoUsuario: "",
      cpfCnpj: "",
      nome: "",
      cidade: "",
      cep: "",
      telefone: "",
      complemento: "",
      bairro: "",
      endereco: "",
      numero: "",
      isLoading: false,

      erroMensagem: "",

      open: false,
      

    }
  }


  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  atualizaEstado = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(event.target.value);
  }
  realizarLogin(event) {
    event.preventDefault();

    let login = {
      email: this.state.email,
      senha: this.state.senha,
    }


    this.setState({ isLoading: true })

    api.post("/login", login)
      .then(response => {
        if (response.status === 200) {
          localStorage.setItem('usuario-frigga', response.data.token)
          this.setState({ isLoading: false })

          console.log("Meu token é: " + response.data.token)

          if (parseJwt().Role === '1' || parseJwt().Role === '3') {
            this.props.history.push('/perfil');
          } else {
            this.props.history.push('/produto')
          }
        }
      })
      .catch(erro => {
        console.log("Erro:", erro)
        this.setState({ erroMensagem: "E-mail ou senha inválidos" })
        this.setState({ isLoading: false })
      })

  }

  postCadastro = (event) => {

    event.preventDefault();
    setTimeout(() => {
      api.post("/usuario",
        JSON.stringify({
          tipoUsuarioId: this.state.tipoUsuario,
          email: this.state.emailCadastro,
          Telefone: this.state.telefone,
          senha: this.state.senhaCadastro,
          cnpjCpf: this.state.cpfCnpj,
          Nome: this.state.nome
        }))
        .then(response => {
          console.log(response)
          setTimeout(() => {
            api.post("/endereco",
              {
                Cep: this.state.cep,
                Nome: this.state.endereco,
                Numero: this.state.numero,
                Complemento: this.state.complemento,
                Cidade: this.state.cidade,
                Bairro: this.state.bairro
              })
              .then(response => {
                console.log(response)
                window.alert("Cadastrado com sucesso")
              })
              .catch(error => {
                console.log(error)
              })
          }, 800);

        })
    }, 500);

    setTimeout(() => {
      api.post("/login", {
          email: this.state.emailCadastro,
          senha: this.state.senhaCadastro
      })
      .then(response => {
        if (response.status === 200) {
          localStorage.setItem('usuario-frigga', response.data.token)
          this.setState({ isLoading: false })

          console.log("Meu token é: " + response.data.token)

          if (parseJwt().Role === '1' || parseJwt().Role === '3') {
            this.props.history.push('/perfil');
          } else {
            this.props.history.push('/produto')
          }
        }
      })
      .catch(erro => {
        console.log("Erro:", erro)
        this.setState({ erroMensagem: "E-mail ou senha inválidos" })
        this.setState({ isLoading: false })
      })
    }, 600); 
   

  }
  checkCep = (c) => {
    c.preventDefault();
    apiViaCep.get(`${this.state.cep}/json/`)
      .then(response => {  
           this.setState( {endereco: response.data.logradouro} )
           this.setState( {cidade: response.data.localidade} )
           this.setState( {bairro: response.data.bairro} ) 
      })
        
        
         
        
        
  
  }
  render() {
    const { open } = this.state;
    return (

      <div className="fundoLogin">
        <Header/>
        <main>
          <div className="container_login">
            <section className="esquerda_login">
              <form onSubmit={this.realizarLogin.bind(this)} id="form_login">
                <figure>
                  <img src={IconLogin} alt="icone do perfil" />
                </figure>
                <div className="form-control">
                  <div className="input-group">
                    <label>Usuario</label>
                    <input
                      className="input_login"
                      type="text"
                      placeholder="E-mail.."
                      aria-label="Digite seu e-mail"
                      name="email"
                      id="usuarioCadastro"
                      value={this.state.email}
                      onChange={this.atualizaEstado}
                      required />
                  </div>
                  <div className="input-group">
                    <label>Senha</label>
                    <input
                      className="input_login"
                      type="password"
                      placeholder="Senha..."
                      aria-label="Digite a sua senha"
                      name="senha"
                      id="senhaCadastro"
                      value={this.state.senha}
                      onChange={this.atualizaEstado}
                      required />
                  </div>
                  {
                    this.state.isLoading === true &&
                    <div className="buttonsContainer">
                      <button className="btn_login" type="submit" disabled>Carregando..</button>
                    </div>
                  }
                  {
                    this.state.isLoading === false &&
                    <div className="buttonsContainer">
                      <button className="btn_login" type="submit">Entrar</button>
                    </div>
                  }
                </div>
              </form>
              <div >
                <button className="btn_login" id="cadastrarBtn" onClick={this.onOpenModal}>Ainda não tenho uma conta</button>
              </div>
              <p style={{ color: 'red' }}>{this.state.erroMensagem}</p>
            </section>

            <Modal open={open} onClose={this.onCloseModal} center>
              <section className="direita_login">
                <h1> Cadastro </h1>
                <form onSubmit={this.postCadastro} id="form_cadastro">
                  <div className="form-control">
                    <div className="input-group radio-group">
                      <label><input
                        onChange={this.atualizaEstado}
                        type="radio"
                        value={2}
                        name="tipoUsuario"
                        id="cadastroCliente" />
                        Cliente</label>
                      <label>
                        <input
                          onChange={this.atualizaEstado}
                          type="radio"
                          value={3}
                          name="tipoUsuario"
                          id="cadastroFornecedor" />
                        Fornecedor
              </label>
                    </div>
                    <div className="input-group">
                      <label>E-mail</label>
                      <input
                        onChange={this.atualizaEstado}
                        value={this.state.emailCadastro}
                        className="input_login"
                        type="email"
                        placeholder="E-mail ..."
                        aria-label="Digite seu e-mail ou cpf"
                        id="email"
                        name="emailCadastro"
                        required />
                    </div>
                    <div className="input-group">
                      <label>Senha</label>
                      <input
                        onChange={this.atualizaEstado}
                        value={this.state.senhaCadastro}
                        className="input_login"
                        type="password"
                        placeholder="Senha..."
                        aria-label="Digite a sua senha"
                        name="senhaCadastro"
                        id="senha"
                        required />
                    </div>
                    <div className="input-group">
                      <label >Cpf/Cnpj</label>
                      <input
                        onChange={this.atualizaEstado}
                        value={this.state.cpfCnpj}
                        className="input_login"
                        type="text"
                        placeholder="Ex: 123.321.45-10"
                        aria-label="Digite seu Cnpj"
                        name="cpfCnpj" id="cpf/cnpj" required />
                    </div>
                    <div className="input-group">
                      <label >Nome</label>
                      <input
                        onChange={this.atualizaEstado}
                        value={this.state.nome}
                        className="input_login"
                        type="text"
                        placeholder="Ex: Joao"
                        aria-label="Digite seu nome"
                        name="nome"
                        id="nome"
                        required />
                    </div>
                    <div className="input-group">
                      <label>Telefone</label>
                      <input
                        onChange={this.atualizaEstado}
                        value={this.state.telefone}
                        className="input_login"
                        type="text"
                        placeholder="Telefone"
                        aria-label="Digite seu telefone"
                        id="telefone"
                        name="telefone"
                        required />
                    </div>
                  </div>
                  <div className="form-control">
                    <h2>Endereço</h2>
                    <div className="input-group">
                      <label >Cep</label>
                      <input
                        onChange={this.atualizaEstado}
                        value={this.state.cep}
                        className="input_login"
                        type="text"
                        placeholder="Ex: 080-60-090"
                        aria-label="Digite seu Cnpj"
                        name="cep"
                        id="cep"
                         />
                        <button onClick={this.checkCep} className="btn_login" >Verificar Cep</button>
                    </div>
                    <div className="input-group">
                      <label>Endereço</label>
                      <input
                        onChange={this.atualizaEstado}
                        value={this.state.endereco}
                        className="input_login"
                        type="text"
                        placeholder="Ex: Rua Albuquerque de Sas"
                        aria-label="Digite seu endereço"
                        name="endereco"
                        id="endereco"
                        required />
                    </div>
                    <div className="input-group">
                      <label >Número</label>
                      <input
                        onChange={this.atualizaEstado}
                        value={this.state.numero}
                        className="input_login"
                        type="text"
                        placeholder="Ex: 138 "
                        aria-label="Digite seu número"
                        name="numero"
                        id="numero"
                        required />
                    </div>
                    <div className="input-group">
                      <label >Complemento</label>
                      <input
                        onChange={this.atualizaEstado}
                        value={this.state.complemento}
                        className="input_login"
                        type="text"
                        placeholder="Ex: apartamento 02 bloco 13 "
                        aria-label="Adicione um complemento"
                        name="complemento"

                        required />
                    </div>
                    <div className="input-group">
                      <label>Cidade</label>
                      <input
                        onChange={this.atualizaEstado}
                        value={this.state.cidade}
                        className="input_login"
                        type="text"
                        placeholder="Ex: SP"
                        aria-label="Digite sua cidade"
                        name="cidade"
                        id="cidade"
                        required />
                    </div>
                    <div className="input-group">
                      <label >Bairro</label>
                      <input
                        onChange={this.atualizaEstado}
                        value={this.state.bairro}
                        className="input_login"
                        type="text"
                        placeholder="Ex: 02789-089"
                        aria-label="Digite seu bairro"
                        name="bairro"
                        id="bairro"
                        required />
                    </div>


                  </div>
                  <div className="buttonContainer">
                    <button type="submit" className="btn_login2">Cadastrar</button>
                  </div>
                </form>

              </section>
            </Modal>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}
export default Entrar;