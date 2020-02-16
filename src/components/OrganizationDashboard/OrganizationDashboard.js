import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, {Component} from "react";
import "../../App.css";
import * as ROUTES from "../../constants/routes";
const axios = require("axios");
const request = require("request");
const proxyurl = "https://cors-anywhere.herokuapp.com/";



class OrganizationDashboard extends Component {
    constructor(props){
        super(props);
        var token = "";
        this.state = {
            token: "",
            userId: "",
            externalID: "",
            name: "test",
            displayName: "test",
            mailNickname: "test",
            certHash: "test",
            organization: "test"
        }
    }


    validateInput = () => {
        var self = this;
        if (self.state.organization === "") {
            alert("Please provide a organization");
            return;
        }
        if (self.state.fullName === "") {
            alert("Please provide a full name for certificate recipient");
            return;
        }
        if (self.state.certificateHash == "") {
            alert("Please add a hash");
            return;
        }
        this.getTokens();
    };

    getTokens = () => {
        var self = this;
        // getting an application token
        var options =
            {
                method: "POST",
                url:
                    proxyurl +
                    "https://login.microsoftonline.com/rpeltekovgmail.onmicrosoft.com/oauth2/v2.0/token",
                headers: {
                    "cache-control": "no-cache",
                    Connection: "keep-alive",
                    "Accept-Encoding": "gzip, deflate",
                    Host: "login.microsoftonline.com",
                    "Postman-Token":
                        "b7a128b9-c64c-40a0-b8ef-1057b52bec74,3776832f-4d86-44f1-8a8d-50825db27425",
                    "Cache-Control": "no-cache",
                    Accept: "*/*",
                    "User-Agent": "PostmanRuntime/7.20.1",
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                form: {
                    grant_type: "client_credentials",
                    scope: "https://graph.microsoft.com/.default",
                    client_secret: "zL919KeD0=XAbHOtsNsNULa.bZ[aN:P@",
                    client_id: "4bdbb115-4940-407b-bfe3-053cb306dded"
                }
            };

        request(options, function(error, response, body) {
            if (response.statusCode != 200) {
                alert(response.statusMessage);
                return;
            }
            self.setState({ token: JSON.parse(body).access_token });

            // getting blockchain workbench token
            var options2 =
                {
                    method: "POST",
                    url:
                        proxyurl +
                        "https://login.microsoftonline.com/rpeltekovgmail.onmicrosoft.com/oauth2/token",
                    headers: {
                        "cache-control": "no-cache",
                        Connection: "keep-alive",
                        Host: "login.microsoftonline.com",
                        "Postman-Token":
                            "216b1c7c-5c35-4104-9a38-e2d50bd58659,84d0e67d-d318-4b95-8a8d-1484ef72c6a8",
                        "Cache-Control": "no-cache",
                        Accept: "*/*",
                        "User-Agent": "PostmanRuntime/7.20.1",
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    form: {
                        grant_type: "client_credentials",
                        client_id: "4bdbb115-4940-407b-bfe3-053cb306dded",
                        client_secret: "zL919KeD0=XAbHOtsNsNULa.bZ[aN:P@",
                        resource: "4bdbb115-4940-407b-bfe3-053cb306dded"
                    }
                };

            request(options2, function(error, response, body) {
                if (response.statusCode != 200) {
                    alert(response.statusMessage);
                    return;
                }
                self.setState({ workbenchToken: JSON.parse(body).access_token });
                self.createCert();
            });
        });
    };

    createCert = () => {
        var self = this;
        var options =
            {
                method: "POST",
                url: proxyurl + "https://graph.microsoft.com/v1.0/users",
                headers: {
                    "Postman-Token": "46e14e54-b4f2-4ce5-8515-a416a516f50d",
                    "cache-control": "no-cache",
                    "Content-Type": "application/json",
                    Authorization: "bearer " + self.state.token
                },
                json: {
                    accountEnabled: true,
                    displayName: self.state.displayName,
                    mailNickname: self.state.mailNickname,
                    givenName: self.state.name,
                    userPrincipalName: self.state.username + "@" + ROUTES.MICROSOFT_ACNT,
                    passwordProfile: {
                        forceChangePasswordNextSignIn: false,
                        password: self.state.password
                    }
                }
            };

        request(options, function(error, response, body) {
            if (response.statusCode != 201) {
                alert(response.statusMessage + ": " + response.body.error.message);
                return;
            }
            self.setState({ externalID: body.id });
            self.addCertToBlockchain();
        });
    }

    addCertToBlockchain = () => {
        var self = this;
        var options = {
            method: "POST",
            url: "https://try3-wi7wz2-api.azurewebsites.net/api/v2/users",
            headers: {
                "Postman-Token": "46e14e54-b4f2-4ce5-8515-a416a516f50d",
                "cache-control": "no-cache",
                "Content-Type": "application/json",
                Authorization: "bearer " + self.state.workbenchToken
            },
            json: {
                emailAddress: self.state.username + "@" + ROUTES.MICROSOFT_ACNT,
                externalID: self.state.externalID,
                Name: self.state.name
            }
        };

        request(options, function(error, response, body) {
            if (response.statusCode != 200) {
                alert(response.statusMessage + ": " + response.body.error.message);
                return;
            }
            self.setState({ userId: body });
            self.addUserToApp();
        });
    };

    addUserToApp = () => {
        var self = this;
        var options =
            {
                method: "POST",
                url:
                    "https://identitypoc-i5qw3e-api.azurewebsites.net/api/v2/applications/1/roleAssignments",
                headers: {
                    "Postman-Token": "46e14e54-b4f2-4ce5-8515-a416a516f50d",
                    "cache-control": "no-cache",
                    "Content-Type": "application/json",
                    Authorization: "bearer " + self.state.workbenchToken
                },
                json: {
                    userId: self.state.userId,
                    applicationRoleId: 1
                }
            };

        request(options, function(error, response, body) {
            if (response.statusCode != 200) {
                alert(response.statusMessage + ": " + response.body.error.message);
                return;
            }
            window.location.href = ROUTES.LOGIN_ONBORAD;
        });
    };
    render(props) {
        return (
            <div className="OrganizationDashboard">
                <header className="Org-header">
                    { /* <img src={logo} className="App-logo" alt="logo" /> */}
                    <p>
                        Upload your transcript here.
                    </p>
                    <font size="2">upload file here</font>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Full name of organization</Form.Label>
                            <Form.Control rows="1"
                                          type="text"
                                          placeholder="e.g. University of California - Berkeley"
                                          onChange={this.organization}
                            />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Candidate full name</Form.Label>
                            <Form.Control rows="1"
                                          type="text"
                                          placeholder="e.g. Ashley Apple"
                                          onChange={this.fullname}
                            />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Certificate Hash</Form.Label>
                            <Form.Control rows="1"
                                          type="text"
                                          placeholder="e.g. 71342asdf41201477fasfa9f8798718a9s8d78asd"
                                          onChange={this.certificateHash}
                            />
                        </Form.Group>
                        <Button variant="primary" onClick={this.validateInput()}>
                            Authenticate!
                        </Button>
                    </Form>
                </header>
            </div>
        )
    }
}
export default OrganizationDashboard;