import React, {Component} from "react";
import Header from "../component/header";
import BeritaTerkini from "../component/berita_terkini";
import Berita from "../component/berita"
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import { Redirect } from "react-router-dom"
import "../style/css-final.css";
import "../style/bootstrap.min.css";

class New extends Component{

    RequestNewCategory = async () => {
        const paramCategory = await this.props.match.params.category;
        this.props.requestNews(paramCategory)
    }
    handleRouterCategory = async categoryName => {
        const category = categoryName;
        await this.props.history.push("/news-category/"+category);
        this.RequestNewCategory();
    }
    componentDidMount = () => {
        this.props.RequestDataNews()
    }
    handleInputChange = async event => {
        await this.props.handleInputChangeSearch(event)
        const value = this.props.search
        this.props.searchNews(value);
    }

    render(){
        const { listNews, isloading} = this.props;
        const topHeadlines = listNews.filter(item => {
            if (item.Title !== null && item.Category !== null){
                return item;
            }
            return false;
        });

        const headlineNews = topHeadlines.map((item) => {
            return(
                <Berita
                title={item.Title}
                year={item.Year}
                category={item.Category}
                description={item.Synopsis}
                img={item.Poster}
                />
            );
        });
        if(this.props.is_login===false){
            return <Redirect to ={{ pathname: '/signin' }}/>
        }
        else{
        return (
            <div>
                <Header
                doSearch={event => this.handleInputChange(event)}
                placeholder="ketik sesuatu"
                everything = {event => this.handleRouterCategory(event)}
                isCategoryNews = {true}
                category
                {...this.props}
                />
                <div class="container-fluid">
                    <div class="row berita">
                        <div class="col-md-12"></div>
                        {isloading ? <div style={{ textAlign:"center"}}>looding...</div> : headlineNews}
                        </div>
                    </div>
                </div>
        );
    }
    }
}

export default connect(
    "listNews, isloading, paramCategory",
    actions
  )(withRouter(New));