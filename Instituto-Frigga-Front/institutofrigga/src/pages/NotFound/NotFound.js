import React, { Component } from 'react';
import Header from '../../Components/Header/Header';

class NotFound extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="App">
                    <h1>404</h1>
                    <p style={{margin: "auto",
                               width: "400px",
                               fontSize:"25px"}}> A página que você procura não foi encontrada</p>
                </div>
            </div>

        )
    }
}
export default NotFound;