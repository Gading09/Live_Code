import React, {Component} from 'react';
import "../style/css-final.css";
import "../style/bootstrap.min.css";
import { Link } from "react-router-dom";
import Search from './search';
import { actions, store } from "../store";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";

class Header extends Component{
    handleRouterNav = async categoryName => {
        const category = categoryName;
        await this.props.history.replace("/news-category/" + category);
      };
    postSignout = () => {
        store.setState({"is_login": false});
        // localStorage.clear()
        this.props.history.push("/");
    };
    render(){
        return(
            <header>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 logo">
                         <img src={require("../logo.svg")} alt=""/>
                         <p>Movie</p>
                         <ul>
                            <li><Link to = "/">Home</Link></li>
                            <li><Link to = "/news">List Movie</Link></li>
                            <li><Link to = "/profile">Profile</Link></li>
                            <li><Link to = "/signin">Login</Link></li>
                            <li><Link onClick={this.postSignout}>Logout</Link></li>
                         </ul>
                    </div>
                </div>
            </div>
         </header>
        );
    }
}

export default connect(
    "is_login",
    actions
  )(withRouter(Header));