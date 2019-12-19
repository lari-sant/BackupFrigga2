// Padrão
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

//Páginas
import Home from '../src/pages/Home/Home';
import Produto from '../src/pages/Produto/Produto';
import Receita from '../src/pages/Receita/Receita';
import VerReceita from '../src/pages/VerReceita/VerReceita'; 
import Perfil from '../src/pages/Perfil/Perfil';
import Entrar from '../src/pages/Entrar/Entrar';
import About from '../src/pages/About/About';
import NotFound from '../src/pages/NotFound/NotFound';

// React Font Awelsome Css
import '@fortawesome/fontawesome-free/css/all.min.css';

// Css
import './index.css';
import './assets/css/entrar.css';
import './assets/css/header&footer.css';
import './assets/css/home&produtos.css';
import './assets/css/modalProduto.css';
import './assets/css/perfil.css';
import './assets/css/about.css'
import './assets/css/receita.css'
import './assets/css/header.css'    


// Dependências necessárias
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';



const Rotas = (
    <Router>
        <div>
            <Switch>
                <Route exact path = "/" component={Home}/>
                
                <Route path = "/produtos" component={Produto}/>
                <Route path = "/produto" component={Produto}/>
                <Route path = "/receitas" component={Receita}/>
                <Route path = "/receita" component={Receita}/>
                <Route path = "/verreceita/" component={VerReceita}/>

                <Route path = "/verreceitas/" component={VerReceita}/>
                <Route path = "/perfil" component={Perfil}/>
                <Route path = "/entrar" component={Entrar}/>
                <Route path = "/about" component={About}/>


                <Route component={NotFound}/>
            </Switch>
        </div>
    </Router>
) 
ReactDOM.render(Rotas, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
