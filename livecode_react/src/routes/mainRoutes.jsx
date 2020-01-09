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
import Action from "../page/action";
import Fiction from "../page/fiction";
import Comedy from "../page/comedy";
import Romance from "../page/romance";
// import NewsCategory from "../page/newsCategory"

const MainRoute = () => {
    return (
        <Provider store = {store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component = {News}/>
                    <Route  path="/signin" component = {SignIn}/>
                    <Route  path="/profile" component = {Profile}/>
                    <Route exact path="/action" component = {Action}/>
                    <Route exact path="/fiction" component = {Fiction}/>
                    <Route exact path="/comedy" component = {Comedy}/>
                    <Route exact path="/romance" component = {Romance}/>
                    <Route component ={NotMatch}/>
                </Switch>
            </BrowserRouter>
        </Provider>
    );
};

export default MainRoute;