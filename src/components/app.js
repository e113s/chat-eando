import LoginContainer from './LoginContainer';
import React, {Component} from 'react';
import './app.css';

class App extends Component{
    state = { user: null};

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if(user){
                this.setState({ user });
            }
        });
    }


    render(){
        return(
            <div id="container">
                <LoginContainer/>
            </div>
        );
    }
}

/*
const App = () => {
    return <h1>Hello From React!</h1>
};
*/

export default App;  