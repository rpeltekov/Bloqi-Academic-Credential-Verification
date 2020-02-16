import React, { Component } from "react";
import * as ROUTES from '../../constants/routes';
import { Button, Alert, Container, Row, Col } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import "./LandingPage.css";

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
            token: token,
            organ: null
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
                token: this.state.token,
                organ: this.state.organ
            }
        })
    }

    login1 = () => {
        console.log("user");
        this.state = {token: this.state.token, organ: false};
        window.location.href = ROUTES.LOGIN;
    };

    login2 = () => {
        this.state = {token: this.state.token, organ: true};
        window.location.href = ROUTES.LOGIN;
    };

    render(props) {
        return (
            <div className="LandingPage">
                <Navbar bg="dark">
                    <Navbar.Brand color="white">BLOQI</Navbar.Brand>
                    { /* DISPLAY LOGO */ }
                </Navbar>
                <header className="header">
                    Welcome to Bloqi!
                    <div className="button1">
                        <Button onClick={this.login1} outline color="white" className="text-black">Login User</Button>
                    </div>
                    <div className="button1">
                        <Button onClick={this.login2} outline color="white" className="text-black">Login Organization</Button>
                    </div>
                </header>
            </div>
        );
    }
}
export default LandingPage;