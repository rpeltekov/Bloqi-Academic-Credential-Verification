import React, { Component } from "react";
import { Spinner } from "reactstrap";
import * as ROUTES from "../../constants/routes";
const axios = require("axios");

class Loader extends Component {
    constructor(props) {
        console.log("in construct");
        super(props);
        var token = "";
        if (props.location.state) {
            token = props.location.state.token;
        }
        this.state = {
            token: token,
        };
    }

    componentWillMount() {
        console.log("in component will mount");
        var token = this.state.token;
        if (token === "") {
            token = window.location.hash.split("&")[0].split("=")[1];
            console.log(token);
            this.setState({
                token: token
            });
        }
        this.getRole(token);
    }

    getRole = token => {
        console.log("in getrole");
        var config = {
            headers: { Authorization: "bearer " + token }
        };

        axios
            .get(ROUTES.GET_USER_INFO, config)
            .then(response => {
                console.log(response);
                this.setState({ userID: response.data.currentUser.userID });
                let self = this;
                axios.get(ROUTES.GET_ROLE_ASSIGNMENTS, config).then(roleResponse => {

                    var roleAssignments = roleResponse.data.roleAssignments;
                    for (let i = 0; i < roleAssignments.length; i++) {
                        //console.log(roleAssignments.length);
                        console.log(roleAssignments[i].user);
                        this.props.history.push({
                            pathname: "/UserDashboard",
                            state: {
                                token: this.state.token,
                                userID: this.state.userID
                            }
                        });
                        if (roleAssignments[i].user.userID == self.state.userID) {
                            if (roleAssignments[i].applicationRoleId == 0) {
                                // is user
                                this.props.history.push({
                                    pathname: "/UserDashboard",
                                    state: {
                                        token: this.state.token,
                                        userID: this.state.userID
                                    }
                                });
                            } else {
                                // is organization
                                self.setState({
                                    organizationId: roleAssignments[i].applicationRoleId
                                });
                                this.props.history.push({
                                    pathname: "/OrganizationDashboard",
                                    state: {
                                        token: this.state.token,
                                        organizationId: this.state.organizationId
                                    }
                                });
                            }
                        }
                    }
                });
            })
            .catch(error => {
                console.log(error);
            });

    };

    render() {
        return (
            <div className="all">
                <Spinner color="primary" />
                <header>hihihihi</header>
            </div>
        );
    }
}

export default Loader;
