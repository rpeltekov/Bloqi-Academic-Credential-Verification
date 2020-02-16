import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import OrganizationDashboard from "./components/OrganizationDashboard/OrganizationDashboard.js";


class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={LandingPage} />
                        <Route
                            exact path="/OrganizationDashboard"
                            render={(props) => <OrganizationDashboard {...props} />}
                        />
                    </Switch>
                </div>
            </Router>
        );
    }
}


export default App;