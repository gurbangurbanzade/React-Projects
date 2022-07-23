import axios from "axios";

import React, { Component } from "react";
export class ExchangeApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      valyuta: "",
      miqdar: "",
      netice: "",
    };
  }
  componentDidMount() {
    axios
      .get("https://api.exchangeratesapi.io/latest?base=USD")
      .then((data) => {
        console.log(data);
      });
    //   .then((data1) => {
    //     console.log(data1);
    //   });
  }

  render() {
    return (
      <div>
        <label htmlFor="">Dollar: </label>
        <input type="number" name="" id="" />
        <button>Hesabla</button>
        <p>AZN</p>
      </div>
    );
  }
}

export default ExchangeApp;
