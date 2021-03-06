import React, { Component } from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

class Landing extends Component {

    constructor() {
        super()
        this.routeLogin = this.routeLogin.bind(this);
        this.routeRegister = this.routeRegister.bind(this);
    }

    routeLogin() {
        let path="/login"
        this.props.history.push(path)
    };

    routeRegister() {
        let path="/register"
        this.props.history.push(path)
    };

    render() {
        return (
            <div style={{
                height: '75vh'
            }}
            className="container valign-wrapper">
                <div className="row">
                    <div className="col s12 center-align">
                        <h4>
                            <b>
                                Build
                            </b>
                            a login/auth app with the{" "}
                            <span style={{
                                fontFamily: "monospace"
                            }}>MERN</span>
                            stack from
                            scratch
                        </h4>
                        <p className="flow-text grey-text text-darken-1">
                        Create a (minimal) full-stack app with user authentication via
              passport and JWTs
                        </p>
                        <br />
                        <BrowserRouter>
                        <div className="col s6">
                            
                            <Link to="/register"
                            style={{
                                width: "140px",
                                borderRadius: "3px",
                                letterSpacing: "1.5px"
                            }}
                            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                            onClick={this.routeRegister}>
                                Register
                            </Link>
                        </div>
                        <div className="col s6">
                            <Link to="/login"
                            style={{
                                width: "140px",
                                borderRadius: "3px",
                                letterSpacing: "1.5px"
                            }}
                            onClick={this.routeLogin}
                            className="btn btn-large btn-flat waves-effect white black-text">
                                Log In
                            </Link>
                        </div>
                        </BrowserRouter>
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing;