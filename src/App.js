import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { Component } from 'react';
import { Route, IndexRoute } from 'react-router';

class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={LandingPage} />
                        <Route exact path="/Register" component={Register} />
                        <Route
                            exact path="/UserDashboard"
                            render={(props) => <UserDashboard {...props} />}
                        />
                        <Route
                            exact path="/OrganizationDashboard"
                            render={(props) => <OrganizationDashboard {...props} />}
                        />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </Router>
        );
    }
}


export default App;