import axios from 'axios';
import React, { Component } from 'react';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtUsername: '',
      txtPassword: '',
      txtName: '',
      txtPhone: '',
      txtEmail: ''
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
                                    <h3>Sign Up</h3>
                                </div>
                                <form method="post">
                                    <div class="form-group mb-3">
                                        <input type="text" class="form-control" placeholder="Username" value={this.state.txtUsername} onChange={(e) => { this.setState({ txtUsername: e.target.value }) }} />
                                    </div>
                                    <div class="form-group mb-3">
                                        <input type="password" class="form-control" placeholder="Password" value={this.state.txtPassword} onChange={(e) => { this.setState({ txtPassword: e.target.value }) }} />
                                    </div>
                                    <div class="form-group mb-3">
                                      <input type="text" class="form-control" placeholder="Name" value={this.state.txtName} onChange={(e) => { this.setState({ txtName: e.target.value }) }} />
                                    </div>
                                    <div class="form-group mb-3">
                                      <input type="tel" class="form-control" placeholder="Phone" value={this.state.txtPhone} onChange={(e) => { this.setState({ txtPhone: e.target.value }) }} />
                                    </div>
                                    <div class="form-group mb-3">
                                      <input type="email" class="form-control" placeholder="Email" value={this.state.txtEmail} onChange={(e) => { this.setState({ txtEmail: e.target.value }) }} />
                                    </div>
                                    <div class="form-group mb-3">
                                        <input type="submit" class="btn btn-fill-out btn-block" value="Sign up" onClick={(e) => this.btnSignupClick(e)} />
                                    </div>
                                </form>
                                <div class="different_login">
                                    <span>OR</span>
                                </div>
                                <ul class="btn-login list_none text-center">
                                    <li><a href="#" class="btn btn-facebook"><i class="ion-social-facebook"></i>Facebook</a></li>
                                    <li><a href="#" class="btn btn-google"><i class="ion-social-googleplus"></i>Google</a></li>
                                </ul>
                                <div class="form-note text-center">Are you ready to create an account? <a href="/login">Login</a></div>
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
  btnSignupClick(e) {
    e.preventDefault();
    const username = this.state.txtUsername;
    const password = this.state.txtPassword;
    const name = this.state.txtName;
    const phone = this.state.txtPhone;
    const email = this.state.txtEmail;
    if (username && password && name && phone && email) {
      const account = { username: username, password: password, name: name, phone: phone, email: email };
      this.apiSignup(account);
    } else {
      alert('Please input username and password and name and phone and email');
    }
  }
  // apis
  apiSignup(account) {
    axios.post('/api/customer/signup', account).then((res) => {
      const result = res.data;
      alert(result.message);
    });
  }
}
export default Signup;