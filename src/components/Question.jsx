import React, { Component } from 'react';
import Style from '../style/Style.css';
import { browserHistory } from 'react-router';
import { addToStore } from '../../reducers/reducer.js';
import { connect } from 'react-redux';
import 'whatwg-fetch';
const urlnew = 'data';

class Question extends Component {
  constructor() {
    super();
    this.state = {
      radio: '',
    };
  }

  loadData() {
    fetch(urlnew)
    .then(function (response) {
      return response;
    }).then(function (json) {
      console.log('parsed json', json);
    }).catch(function (ex) {
      console.log('parsing failed', ex);
    });
  }

  componentDidMount() {
    this.loadData();
  }

  handleEnter(event) {
    event.preventDefault();
    this.props.dispatch(addToStore(1, this.state.radio));
    console.log('entered next');
    if (this.state.radio !== '') {
      browserHistory.push('/result');
    }
  }

  radioChange(event) {
    this.setState({ radio: event.target.value });
  }

  render() {
    return (
      <div>
        <div className={Style.quest}>
          <h2>1 of 5 Questions</h2>
            <form>
              <table>
                <td>
                  <tr>
                    <p>
                      One horse power is equal to
                    </p>
                  </tr>
                  <div>
                    <tr>
                      <td>
                        <input type="radio" value="746 watts" name="ans"
                         onChange={this.radioChange.bind(this)}></input>746 watts<br/>
                      </td>
                    </tr>
                    <tr>
                      <input type="radio" value="748 watts" name="ans"
                         onChange={this.radioChange.bind(this)}></input>748 watts<br/>
                    </tr>
                    <tr>
                      <input type="radio" value="756 watts" name="ans"
                        onChange={this.radioChange.bind(this)}></input>756 watts<br/>
                    </tr>
                    <tr>
                      <input type="radio" value="736 watts" name="ans"
                        onChange={this.radioChange.bind(this)}></input>736 watts<br/>
                    </tr>
                  </div>
                </td>
              </table>
              <button className={Style.next}
                onClick = {this.handleEnter.bind(this)}>Save & Next
              </button>
            </form>
        </div>
      </div>
    );
  }
}

export default connect()(Question);
