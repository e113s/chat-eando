import React, {Component} from 'react';

const Header = (props) => {
    return(
        <div id="Header">
            <img src="../assets/icon.png" alt="Logo"/>
            <h1>Chat-eando</h1>
            {props.children}
        </div>
    );
};

export default Header;