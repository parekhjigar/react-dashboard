import React, { Component } from "react";
import { Container, Nav } from "./styled-components";
//import logo from './logo.svg';
import './App.css';
import config from './config';
import "bootstrap/dist/css/bootstrap.css";
const url = `https://sheets.googleapis.com/v4/spreadsheets/${ config.spreadsheetId }/values:batchGet?ranges=Sheet1&majorDimension=ROWS&key=${ config.apiKey }`;


class App extends Component {

  constructor() {
    super();
    this.state = {
     items:[] 
    };
  }
  
  // Fetching data from google sheet
  componentDidMount() {
    fetch(url).then(response => response.json()).then(data => {
      let batchRowValues = data.valueRanges[0].values;

      const rows = [];
      for (let i = 1; i < batchRowValues.length; i++) {
        let rowObject = {};
        for (let j = 0; j < batchRowValues[i].length; j++) {
          rowObject[batchRowValues[0][j]] = batchRowValues[i][j];
        }
        rows.push(rowObject);
      }

      this.setState({ items: rows });
    });
  }

  render() {
    return (
      <Nav className="navbar navbar-expand-lg fixed-top is-white is-dark-text">
        <div className="navbar-brand h1 mb-0 text-large font-medium">
          React Dashboard
        </div>
        <div className="navbar-nav ml-auto">
          <div className="user-detail-section">
            <span className="pr-2">Hi, User</span>
            <span className="img-container">

            <img src="" className="rounded-circle" alt="user" />
             </span>
        </div>
        </div>
      </Nav>
    );
  }
}

export default App;
