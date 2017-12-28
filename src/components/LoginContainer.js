import React, {Component} from 'react';
import Header from './Header';

class LoginContainer extends Component {
    state = { email: '', password: '', error:''};

    handleEmailChange = (event) => {
        this.setState({ email: event.target.value });
    };

    handlePasswordChange = (event) => {
        this.setState({ password: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ error: '' });
        if(this.state.email && this.state.password){
            this.login();
        }else{
            this.setState({ error: 'Complete ambos campos por favor'});
        }
    };

    login() {
        firebase
            .auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                if(err.code === 'auth/user-not-found'){
                    this.signup();
                } else {
                    this.setState({ error: 'Error al iniciar sesión.'});
                }
            })
    }

    signup() {
        firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
            this.setState({ error: 'Error al Registrarse.'});
        })
    }
    
    render(){
        return(
            <div id="LoginContainer" className="inner-container">
                <Header />
                <form onSubmit = {this.handleSubmit}>
                    <p>Inicie sesión o registrese ingresando su correo electrónico y contraseña.</p>
                    <input
                        type="text"
                        onChange={this.handleEmailChange}
                        value={this.state.email}
                        placeholder="Su correo"
                        />
                    <input
                        type="password"
                        onChange={this.handlePasswordChange}
                        value={this.state.password}
                        placeholder="Su contraseña"/>

                    <p className = "error">{this.state.error}</p>

                    <button className="red light" type="submit">Iniciar Sesion</button>
                </form>
            </div>
        );
    }
}

export default LoginContainer;