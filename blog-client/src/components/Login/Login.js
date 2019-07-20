import React, {Component} from 'react'

import Header from '../Header/Header';
import {Link, Redirect} from 'react-router-dom';
import {Config} from '../../config/Config';

class Login extends Component {

    constructor(props){
        super(props)
        this.state = {
            gotoHome : false
        }
    }

    loginUser(e) {
        e.preventDefault();
        let url = Config.BASE_URL+"Users/login";
        fetch(url,{
            method : 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',             
            },
            body: JSON.stringify({username : this.state.username,password : this.state.lpassword})

        }).then(response => response.json())
        .then(data => {
            if(!data.error){
                localStorage.setItem('user', JSON.stringify(data));
                this.setState({gotoHome:true})
            }
            else
                alert("wrong username or password")
        });
    }

    handleChangeLoginUsername(e) {
        this.setState({ username: e.target.value });
    }

    handleChangeLoginPassword(e) {
        this.setState({ lpassword: e.target.value });
    }

    render(){
        if (this.state.gotoHome) {
            return <Redirect push to="/" />;
        }
        return (
            <div>
                <Header></Header>
                <div className="login-form"> 
                    <form action="" method="post" onSubmit={this.loginUser.bind(this)}>
                        <h2 className="text-center">Log in</h2>       
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Username" name="username" onChange={this.handleChangeLoginUsername.bind(this)} required="required" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Password" name="lpassword" onChange={this.handleChangeLoginPassword.bind(this)} required="required" />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block">Log in</button>
                        </div>
                        <div className="clearfix">
                            <label className="pull-left checkbox-inline"><input type="checkbox" /> Remember me</label>
                            <a href="#" className="pull-right">Forgot Password?</a>
                        </div>        
                    </form>
                    <p className="text-center"><Link to="/register">Create an Account</Link></p>
                </div>
            </div>
        )
    }

}
export default Login;