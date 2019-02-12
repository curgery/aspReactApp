import React, {Component} from 'react';


import {BrowserRouter as Router} from "react-router-dom";
import {Route, Switch} from 'react-router-dom';
import Routes from "../../Routes";

class FullPage extends Component {
    render() {
        return (
            <div>
                <h2>RLG Developer Associates, LLC</h2>
                   <Routes/>
            </div>
        );
    }
}

FullPage.defaultProps = {};

export default FullPage;