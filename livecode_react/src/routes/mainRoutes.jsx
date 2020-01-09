import React from "react";
import { Route, Switch } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "unistore/react";
import { store } from "../store";

import News from "../page/news"
import SignIn from "../component/sign_in"
import Profile from "../component/profile"
import New from "../page/new"
import NotMatch from "../component/notmatch"
// import NewsCategory from "../page/newsCategory"

const MainRoute = () => {
    return (
        <Provider store = {store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component = {News}/>
                    <Route  path="/signin" component = {SignIn}/>
                    <Route  path="/profile" component = {Profile}/>
                    <Route exact path="/news" component = {New}/>
                    <Route component ={NotMatch}/>
                </Switch>
            </BrowserRouter>
        </Provider>
    );
};

export default MainRoute;