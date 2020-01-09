import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store";
import Header from "./header";

class SignIn extends Component {
  state = { namaPengguna: "", kataKunci: "" };

  changeInput = e => {
    console.warn("cek event target", e.target.value);
    console.warn('status login', this.props.is_login)
    this.setState({ [e.target.name]: e.target.value });
  };

  postLogin = async () => {
    const { namaPengguna, kataKunci } = this.props;
    const data = {
      username: namaPengguna,
      password: kataKunci
    };
    store.setState({
      'namaPengguna': data.username,
      'kataKunci': data.password
    });
    const self = this;
    await axios
      .post("https://api-todofancy.herokuapp.com/api/auth", data)
      .then(function (response) {
        console.warn("cek respon data login ", response.data.user_data.avatar);
        if (response.data.user_data.username){
        localStorage.setItem("is_login", true);
        localStorage.setItem("avatar", response.data.user_data.avatar);
        localStorage.setItem("username", response.data.user_data.username);
        localStorage.setItem("email", response.data.user_data.email);
        store.setState({
          'is_login': true,
          "avatar": response.data.user_data.avatar,
          'username': response.data.user_data.username,
          'email': response.data.user_data.email
        });
        self.props.history.push("/profile");
      }
      })
      .catch(function (error) {
        console.log(error);
        // self.props.history.push("/profile");
      });
  };

  render() {
    console.log("state", this.state);
    return (
      <React.Fragment>
        <Header {...this.props} />
        <section>
          <form onSubmit={e => e.preventDefault()}>
            <div class="wrapper fadeInDown yuks">
                <div id="formContent">
                <h4 className="wahana">Sign In</h4>
                    <form>
                        <input 
                        type="text"
                        id="login"
                        class="fadeIn second"
                        name="namaPengguna" 
                        placeholder="login"
                        onChange={e => this.changeInput(e)}
                        required
                        />

                        <input
                        type="text"
                        id="password"
                        class="fadeIn third"
                        name="kataKunci"
                        placeholder="password"
                        onChange={e => this.changeInput(e)}
                        required
                        />

                        <input
                        type="submit"
                        class="fadeIn fourth"
                        value="Log In"
                        onClick={() => this.postLogin()}
                        />
                    </form>
                </div>
            </div>
          </form>
        </section>
      </React.Fragment>
    );
  }
}

export default connect(
  "namaPengguna, kataKunci, username, avatar, email, is_login",
  actions
)(withRouter(SignIn));