import React from 'react';
import 'whatwg-fetch';
const urlnew = 'data';
let questionArray = [];
let emptyArray = [];

class Questionfirst extends React.Component {
  constructor() {
    super();
    this.state = {
      value: [],
    };
  }

  loaddata() {
    fetch(urlnew)
    .then(function (response) {
      return response.json();
    }).then(function (json) {
      questionArray = json;
    }).catch(function (ex) {
      console.log('parsing failed', ex);
    });
  }

  componentDidMount() {
    this.loaddata();
    this.setState({ value: questionArray });
    emptyArray = this.state.value;
  }

  componentDidUpdate() {
    const arr = this.state.value;
    console.log(arr);
    console.log(emptyArray);
    if (arr.length === 0) {
      console.log(this.state.value);
      this.setState({ value: questionArray });
    }
  }

  render() {
    return (
         <div>
            Hello World!!!
            {this.state.value}
         </div>
      );
  }
}

export default Questionfirst;
