import React, { Component } from "react";
import * as ROUTES from '../../constants/routes';
import { Button, Alert, Container, Row, Col } from 'react-bootstrap';

class LandingPage extends Component {
    constructor(props) {
        super(props);
        var token = "";
        var receivedProps = props.location.state;
        if (receivedProps) {
            if (receivedProps.token) {
                token = receivedProps.token;
            }
        }
        this.state = {
            token: token
        }
    }

    componentWillMount() {
        if (this.state.token != "") {
            this.redirectUser();
        }
    }

    redirectUser = () => {
        this.props.history.push({
            pathname: "/Loading",
            state: {
                token: this.state.token
            }
        })
    }

    register = (e) => {
        this.props.history.push("/Register");
    };

    login1 = () => {
        window.location.href = ROUTES.LOGIN;
    };
    login2 = () => {
        window.location.href = ROUTES.LOGIN;
    };

    render(props) {
        return (
            <div>
                <header>
                    Welcome to Bloqi!
                </header>
                <div className="button1">
                    <Button onClick={this.login1} outline color="white" className="text-black">Login User</Button>
                </div>
                <div className="button1">
                    <Button onClick={this.login2} outline color="white" className="text-black">Login Institution</Button>
                </div>
            </div>
        );
    }
}
export default LandingPage;