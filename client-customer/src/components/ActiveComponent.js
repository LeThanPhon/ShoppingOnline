import axios from 'axios';
import React, { Component } from 'react';

class Active extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtID: '',
      txtToken: ''
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
                                    <h3>ACTIVE ACCOUNT</h3>
                                </div>
                                <form method="post">
                                    <div class="form-group mb-3">
                                      <input type="text" class="form-control" placeholder='ID' value={this.state.txtID} onChange={(e) => { this.setState({ txtID: e.target.value }) }} />
                                    </div>
                                    <div class="form-group mb-3">
                                      <input type="text" class="form-control" placeholder='Token' value={this.state.txtToken} onChange={(e) => { this.setState({ txtToken: e.target.value }) }} />
                                    </div>
                                    <div class="form-group mb-3">
                                        <input type="submit" class="btn btn-fill-out btn-block" value="ACTIVE" onClick={(e) => this.btnActiveClick(e)} />
                                    </div>
                                </form>
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
  btnActiveClick(e) {
    e.preventDefault();
    const id = this.state.txtID;
    const token = this.state.txtToken;
    if (id && token) {
      this.apiActive(id, token);
    } else {
      alert('Please input id and token');
    }
  }
  // apis
  apiActive(id, token) {
    const body = { id: id, token: token };
    axios.post('/api/customer/active', body).then((res) => {
      const result = res.data;
      if (result) {
        alert('OK BABY!');
      } else {
        alert('SORRY BABY!');
      }
    });
  }
}
export default Active;