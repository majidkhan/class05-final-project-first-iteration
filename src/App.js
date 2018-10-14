import React, { Component } from 'react';
import Header from './components/header/Header';
import Calendar from "./components/calendar/Calendar";
// import MapComponent from "./components/map-component/MapComponent"
import logo from './logo.svg';
import './App.css';
import FooterPage from './components/Footer/FooterPage';
import Dropdown from './components/DropDown/Dropdown';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Dropdown />
        <Calendar />
        <footer>
          <FooterPage />
        </footer>
      </div>
    );
  }
}

export default App;
