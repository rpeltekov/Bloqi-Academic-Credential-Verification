import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, {Component} from "react";
import "../../App.css";

class UserDashboard extends Component {
    render(props) {
        return (
            <div className="UserDashboard">
                <header className="User-header">
                    { /* <img src={logo} className="App-logo" alt="logo" /> */}
                    <p>User Dashboard Authentication</p>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Candidate Full Name</Form.Label>
                            <Form.Control rows="1"
                                          type="text"
                                          placeholder="e.g. Abby Apple"
                            />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Certificate Hash</Form.Label>
                            <Form.Control rows="1"
                                          type="text"
                                          placeholder="e.g. 71342asdf41201477fasfa9f8798718a9s8d78asd"
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Check File Authenticity
                        </Button>
                    </Form>
                    { /* file upload */}
                    { /* name, authenticator/institute, cert hash */}
                </header>
            </div>
        )
    }
}

export default UserDashboard;