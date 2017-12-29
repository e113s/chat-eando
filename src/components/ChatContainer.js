import React, {Component} from 'react';
import Header from './Header';

export default class ChatContainer extends Component{

    handleLogout = () => {
        firebase.auth().signOut();
    };

    render(){
        return(
            <div id="ChatContainer">
                <Header>
                    <button className = "red" onClick={this.handleLogout}>Cerrar Sesión</button>
                </Header>
                <h1>Hello from chat container!</h1>
            </div>
        );
    }
}