import LoginContainer from './LoginContainer';
import React, {Component} from 'react';
import './app.css';

class App extends Component{
    render(){
        return(
            <div id="container" className="inner-container">
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