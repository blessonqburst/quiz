import React, { Component } from 'react';
import Style from '../style/Style.css';
import { browserHistory } from 'react-router';

export default class Login extends Component{
  constructor() {
    super();
    this.state = {
      uname: '',
      pword: '',
    };
  }

  componentDidMount() {
    document.getElementById('display').style.display = 'none';
  }

  unameChange (event) {
    this.setState({ uname: event.target.value });
  }

  pwordChange (event) {
    this.setState({ pword: event.target.value });
  }

  handleSubmit (event) {
    event.preventDefault();
    const uname = 'a';
    const pword = 'b';
    if (uname === this.state.uname && pword === this.state.pword) {
      document.getElementById('display').style.display = 'none';
      browserHistory.push('/instructions');
    } else {
      document.getElementById('display').style.display = 'block';
    }

    this.setState({ uname: '', pword: '' });
  }

  render() {
    return (
      <div>
        <div className={Style.round}>
          <div>
            <img src="../../images/OnlineExamLogo.png" className={Style.logo}></img>
          </div>
          <div className={Style.form}>
            <form onSubmit= { this.handleSubmit.bind(this) }>
              <table className={Style.table}>
                <tr>
                  <td>
                    <label>UserName:</label>
                  </td>
                  <td>
                    <input type="text" name="username" value = {this.state.uname}
                      placeholder="User name"
                      onChange = {this.unameChange.bind(this)}/>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Password:</label>
                  </td>
                  <td>
                    <input type="password" name="Password"
                      value = {this.state.pword} placeholder="Password"
                      onChange = {this.pwordChange.bind(this)}/>
                  </td>
                </tr>
              </table>
              <div>
                <input  className={Style.button} type="submit" value = "Login"/>
              </div>
              <div id="display">
                Invalid data
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
