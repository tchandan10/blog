import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import {Config} from '../../config/Config'
import 'bootstrap/dist/css/bootstrap.min.css';
//import '../../App.css'
class Header extends Component {

    constructor(props){
        super(props)
        this.state={
          user : localStorage.getItem('user')
        }
    }

    logout(){
      let url = Config.BASE_URL+"Users/logout?access_token="+JSON.parse(this.state.user).id;
      fetch(url,{
          method : 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',             
          }
      }).then(response => {
        if(response.status==204){
          localStorage.clear();
          this.setState({user:""});
        }
      });
    }

    render(){
      let menu = (this.state.user=="" || !this.state.user) ? Config.MENUS : Config.USER_MENUS;
      let that = this;
        return (
            <header>
          <div className="width">
            <h1><a href="/">Blog Web</a></h1>
            <nav>
              <ul className="sf-menu dropdown">
                  {
                      menu.map(function(val, key){
                        return  (
                            <li className="selected" key={key}>
                              {(val.url=="/logout") ? <a onClick={that.logout.bind(that)} className="logout">Logout</a> : <Link to={val.url}>{val.name}</Link>}</li>
                        )
                      })
                  }
                {/* <li className="selected"><a href="index.html">Home</a>
                </li>
                <li><a className="has_submenu" href="examples.html">Examples</a>
                  <ul>
                    <li><a href="noslides.html">Static Text Page</a>
                    </li>
                    <li><a href="page.html">Static Frontpage</a>
                    </li>
                    <li><a href="#">Another link</a>
                    </li>
                  </ul>
                </li>
                <li><a href="three-column.html">Three Column</a>
                </li>
                <li><a className="has_submenu" href="#">Products</a>
                  <ul>
                    <li><a href="#">Product One</a>
                    </li>
                    <li><a href="#">Product Two</a>
                    </li>
                    <li><a href="#">Product Three</a>
                    </li>
                  </ul>
                </li> */}
              </ul>
            </nav>
          </div>
        </header>
        )
    }
}

export default Header;