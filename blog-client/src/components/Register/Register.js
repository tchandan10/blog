import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom';
import Header from '../Header/Header'

class Register extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users :[],
            gotoHome : false
        }
    }

    handleChangefullName(e) {
        this.setState({ full_name: e.target.value });
    }
    handleChangeUsername(e) {
        this.setState({ user_name: e.target.value });
    }
    handleChangeEmail(e) {
        this.setState({ email: e.target.value });
    }
    handleChangePassword(e) {
        this.setState({ password: e.target.value });
    }
    handleChangeConfirmpass(e) {
        this.setState({ confirm_password: e.target.value });
    }

    registerUser(e) {
        e.preventDefault();
        let url = "http://localhost:3000/api/Users";
        fetch(url, {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },

            body: JSON.stringify({ realm: this.state.full_name, username: this.state.user_name, email: this.state.email, password: this.state.password, emailVerified: true })

        }).then(response => response.json())
            .then(data => {
                if(data.error !=''){
                    if(data.error.statusCode==422)
                    alert('username or email already exists');
                    else
                    alert('an error occured please try again');
                }else{
                    this.setState({ users: data });
                }
                

            });
    }

    render() {
        return (
            <div>
                <Header></Header>
                <div className="signup-form">

                    <form action="" method="post" onSubmit={this.registerUser.bind(this)}>
                        <h2>Register</h2>
                        <p className="hint-text">Create your account. It's free and only takes a minute.</p>
                        <div className="form-group">

                            <input type="text" className="form-control" name="full_name" placeholder="Full Name" onChange={this.handleChangefullName.bind(this)} required="required" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" name="user_name" placeholder="UserName" onChange={this.handleChangeUsername.bind(this)} required="required" />
                        </div>

                        <div className="form-group">
                            <input type="email" className="form-control" name="email" placeholder="Email" required="required" onChange={this.handleChangeEmail.bind(this)} />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" name="password" placeholder="Password" onChange={this.handleChangePassword.bind(this)} required="required" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" name="confirm_password" placeholder="Confirm Password" onChange={this.handleChangeConfirmpass.bind(this)} required="required" />
                        </div>
                        <div className="form-group">
                            <label className="checkbox-inline"><input type="checkbox" required="required" /> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-success btn-lg btn-block">Register Now</button>
                        </div>
                    </form>
                    <div className="text-center">Already have an account? <Link to="/login">Sign in</Link></div>

                </div>
            </div>
                )
            }
        
        }
export default Register;