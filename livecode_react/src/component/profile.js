import React from "react";
import { Redirect } from "react-router-dom";
import Header from "./header";

const Profile = props => {
  const is_login = JSON.parse(localStorage.getItem("is_login"));
  const username = localStorage.getItem("username");
  const email = localStorage.getItem("email");
  const avatar = localStorage.getItem("full_name");
  // console.warn("is_login", is_login);
  // console.warn("first_name", first_name);
  // console.warn("last_name", last_name);
  // console.warn("email", email);
  // console.warn("full_name", full_name);
  if (is_login === null) {
    return <Redirect to={{ pathname: "/signin" }} />;
  } else {
    return (
      <React.Fragment>
        <Header {...props} />
        <section className="content">
          <div className="container prop">
            <div className="row">
              <div className="col-md-12">
                <h1 style={{ textAlign : "center"}}>Profile</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-4">
                    <img src={{avatar}} alt=""/>
                  </div>
                  <div className="col-md-8">
                    <p>{username}<br/>{email}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3"></div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
};

export default Profile;
