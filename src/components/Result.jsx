import React, { Component } from 'react';
import Style from '../style/Style.css';
import { browserHistory } from 'react-router';

export default class Result extends Component{
  buttonClick(event) {
    browserHistory.push('/');
  }

  render() {
    return (
      <div>
        <div>
          <button className={Style.logout} onClick= {this.buttonClick.bind(this)}>Logout</button>
        </div>
        <div>
          <form>
            <table className={Style.summary}>
              <tr>
                <td><label>Attended:</label></td>
                <td><input type="text"/></td>
              </tr>
              <tr>
                <td><label>correct:</label></td>
                <td><input type="text"/></td>
              </tr>
              <tr>
                <td><label>wrong:</label></td>
                <td><input type="text"/></td>
              </tr>
              <tr>
                <td><label>Percentage:</label></td>
                <td><input type="text"/></td>
              </tr>
            </table>
          </form>
        </div>

      </div>
    );
  }
}
