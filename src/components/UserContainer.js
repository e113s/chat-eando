import React, {Component} from 'react';
import {Link} from 'react-router-dom'; 
import Header from './Header';

export default class UserContainer extends Component{
    render(){
        return(
            <div id="UserContainer">
                <Header>
                    <Link to="/">
                        <button className="red">Volver al chat</button>
                    </Link>
                </Header>
                <h1>Hello from UserContainer for user {this.props.match.params.id}</h1>
            </div>
        );
    }
}