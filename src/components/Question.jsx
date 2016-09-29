import React, { Component } from 'react';
import Style from '../style/Style.css';
import { browserHistory } from 'react-router';
import { addToStore } from '../../reducers/reducer.js';
import { connect } from 'react-redux';

class Question extends Component {
  constructor() {
    super();
    this.state = {
      radio: '',
      questionArray: [],
      counter: 0,
    };
  }

  handleEnter(event) {
    event.preventDefault();
    this.props.dispatch(addToStore(questionArray[this.state.counter].No, this.state.radio));
    if (this.state.radio !== '') {
      browserHistory.push('/result');
    }
  }

  radioChange(event) {
    this.setState({ radio: event.target.value, counter: this.state.counter + 1 });
  }

  render() {
    return (
      <div>
        <div className={Style.quest}>
          <h2>{questionArray[this.state.counter].No} of 5 Questions</h2>
            <form>
              <table>
                <td>
                  <tr>
                    <p>
                      {questionArray[this.state.counter].Qn}
                    </p>
                  </tr>
                  <div>
                    <tr>
                      <td>
                        <input type="radio" value={questionArray[this.state.counter].Opt1} name="ans"
                         onChange={this.radioChange.bind(this)}></input>{questionArray[this.state.counter].Opt1}<br/>
                      </td>
                    </tr>
                    <tr>
                      <input type="radio" value={questionArray[this.state.counter].Opt2} name="ans"
                         onChange={this.radioChange.bind(this)}></input>{questionArray[this.state.counter].Opt2}<br/>
                    </tr>
                    <tr>
                      <input type="radio" value={questionArray[this.state.counter].Opt3} name="ans"
                        onChange={this.radioChange.bind(this)}></input>{questionArray[this.state.counter].Opt3}<br/>
                    </tr>
                    <tr>
                      <input type="radio" value={questionArray[this.state.counter].Opt4} name="ans"
                        onChange={this.radioChange.bind(this)}></input>{questionArray[this.state.counter].Opt4}<br/>
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
