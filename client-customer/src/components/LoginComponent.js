import axios from 'axios';
import React, { Component } from 'react';
import MyContext from '../contexts/MyContext';
import withRouter from '../utils/withRouter';
import '../bootstrap/css/bootstrap.min.css'
import '../css/ionicons.min.css'
import '../css/style.css'

class Login extends Component {
  static contextType = MyContext; // using this.context to access global state
  constructor(props) {
    super(props);
    this.state = {
      txtUsername: '',
      txtPassword: ''
    };
  }
  render() {
    return (
      <div class="main_content">
        <div class="login_register_wrap section">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-6 col-md-10">
                        <div class="login_wrap">
                            <div class="padding_eight_all bg-white">
                                <div class="heading_s1">
                                    <h3>Login</h3>
                                </div>
                                <form method="post">
                                    <div class="form-group mb-3">
                                      <input type="text" class="form-control" placeholder='Username' value={this.state.txtUsername} onChange={(e) => { this.setState({ txtUsername: e.target.value }) }} />
                                    </div>
                                    <div class="form-group mb-3">
                                      <input type="password" class="form-control" placeholder='Password' value={this.state.txtPassword} onChange={(e) => { this.setState({ txtPassword: e.target.value }) }} />
                                    </div>
                                    <div class="login_footer form-group mb-3">
                                        <div class="chek-form">
                                        </div>
                                        <a href="#">Forgot password?</a>
                                    </div>
                                    <div class="form-group mb-3">
                                        <input type="submit" class="btn btn-fill-out btn-block" value="Login" onClick={(e) => this.btnLoginClick(e)} />
                                    </div>
                                </form>
                                <div class="different_login">
                                    <span>OR</span>
                                </div>
                                <ul class="btn-login list_none text-center">
                                    <li><a href="#" class="btn btn-facebook"><i class="ion-social-facebook"></i>Facebook</a></li>
                                    <li><a href="#" class="btn btn-google"><i class="ion-social-googleplus"></i>Google</a></li>
                                </ul>
                                <div class="form-note text-center">New to account? <a href="/signup">Sign Up</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
    );
  }
  // event-handlers
  btnLoginClick(e) {
    e.preventDefault();
    const username = this.state.txtUsername;
    const password = this.state.txtPassword;
    if (username && password) {
      const account = { username: username, password: password };
      this.apiLogin(account);
    } else {
      alert('Please input username and password');
    }
  }
  // apis
  apiLogin(account) {
    axios.post('/api/customer/login', account).then((res) => {
      const result = res.data;
      if (result.success === true) {
        this.context.setToken(result.token);
        this.context.setCustomer(result.customer);
        this.props.navigate('/home');
      } else {
        alert(result.message);
      }
    });
  }
}
export default withRouter(Login);

