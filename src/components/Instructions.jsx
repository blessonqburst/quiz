import React, { Component } from 'react';
import Style from '../style/Style.css';
import { browserHistory } from 'react-router';

export default class Instructions extends Component{

  handleEnter(event) {
    event.preventDefault();
    console.log('entered submit');
    if (document.getElementById('check').checked === true) {
      browserHistory.push('/question');
    }
  }

  render() {
    return (
      <div>
        <div className={Style.instructhead}>
          <h2><u>Please read the following instructions carefully</u>   !!!</h2>
        </div>
        <div className={Style.instruct}>
          <ul>
            <li>Candidates need to report thirty minutes prior to the start of
               Online Exam.</li>
             <li>Only a pencil/pen will be allowed into the Exam Hall.</li>
            <li>Candidates have to carry a valid Identity Card bearing their
               photograph and date of birth along with the Hall Ticket to the
               exam centre.</li>
            <li>Candidates have to report to the registration desk where  Admit
               Card may be scanned and the candidate’s photograph will be
               captured.</li>
            <li>The candidates will be assigned to a computer after the
               verification and registration.</li>
            <li>A rough sheet of paper will be provided for all rough work that
               need to be done during Computer Based Test.</li>
            <li>Candidates may be prohibited from carrying any electronic items
             like calculators, mobiles, wireless devices.</li>
          </ul>
        </div>
        <div>
          <div className={Style.checkbox}>
            <form>
              <input type="checkbox" id="check" value="agree"/> I Agree
            </form>
          </div>
          <div className={Style.submit}>
            <form onSubmit = {this.handleEnter.bind(this)}>
                <input type="submit" value="Start Test" className={Style.subbut}/>
            </form>
          </div>
        </div>
      </div>
     );
  }
}
