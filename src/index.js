import React    from 'react';
import ReactDOM from 'react-dom';
import App      from './app';

ReactDOM.render(<App />, document.getElementById("root"));

if(module.hot){
    module.hot.accept('./App', () => {
        const NextApp = require('./App').default;
        ReactDOM.render(<App />, document.getElementById("root"));
    });
};

 