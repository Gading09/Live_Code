import React, {Component} from 'react';
import { Redirect } from "react-router-dom"
import "../style/css-final.css";
import "../style/bootstrap.min.css";

class Action extends Component{
    render(){
        if(this.props.is_login===false){
            return <Redirect to ={{ pathname: '/signin' }}/>
        }
        else{
        return(
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-3 gambar">
                    <img src={this.props.img} alt=""/>
                </div>
                <div className="col-md-7">
                    <div className="col-md-12 pendek">
                        <p>{this.props.title}</p>
                        <p>{this.props.year}</p>
                        <p>{this.props.category}</p>
                        <p>{this.props.description}</p>
                    </div>
                </div>
                <div className="col-md-1"></div>
            </div>
        );
    }
    }
}

export default Action;