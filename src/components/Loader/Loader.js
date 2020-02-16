import React, { Component } from "react";
import { Spinner } from "reactstrap";
import * as ROUTES from "../../constants/routes";
const axios = require("axios");

class Loader extends Component {
    constructor(props) {
        console.log("in construct");
        super(props);
        var token = "";
        var organ = null;
        if (props.location.state) {
            token = props.location.state.token;
            organ = this.props.organ;
        }
        this.state = {
            token: token,
            organ: organ
        };
    }

    componentWillMount() {
        var token = this.state.token;
        if (token === "") {
            token = window.location.hash.split("&")[0].split("=")[1];
            console.log(token);
            this.setState({
                token: token,
                organ: this.props.organ
            });
        }
        this.getRole(token);
    }

    getRole = token => {
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
                        console.log(roleAssignments[i].user);
                        if (roleAssignments[i].user.userID == self.state.userID) {
                            if (this.state.organization) {
                                // is user
                                this.props.history.push({
                                    pathname: "/UserDashboard",
                                    state: {
                                        token: this.state.token,
                                        userID: this.state.userID,
                                        organization: this.state.organization
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
                                        organizationId: this.state.organizationId,
                                        organization: this.state.organization
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
                <Spinner color="primary" text-align="center"/>
            </div>
        );
    }
}

export default Loader;
