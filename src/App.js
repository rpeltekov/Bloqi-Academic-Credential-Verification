import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { Component } from 'react';
import { Route, IndexRoute } from 'react-router';

class App extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    { /* <img src={logo} className="App-logo" alt="logo" /> */}
                    <p>
                        Upload your transcript here.
                    </p>
                    <font size="2">upload file here</font>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Full name of institution</Form.Label>
                            <Form.Control rows="1"
                                          type="text"
                                          placeholder="e.g. University of California - Berkeley"
                            />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Candidate full name</Form.Label>
                            <Form.Control rows="1"
                                          type="text"
                                          placeholder="e.g. Ashley Apple"
                            /> </Form.Group>

                        <Button variant="primary" type="submit">
                            Upload for authentication
                        </Button>
                    </Form>
                    { /* file upload */}
                    { /* name, authenticator/institute, cert hash */}

                </header>
            </div>
        );
    }
}


export default App;