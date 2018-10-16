import React, { Component } from 'react';
import Header from './components/header/Header';
import Calendar from "./components/calendar/Calendar";
import SiteHeader from "./components/site-header/SiteHeader";
import SideBar from "./components/sidebar/sidebar";
import "./App.css";
import FooterPage from "./components/Footer/FooterPage";
import Dropdown from "./components/DropDown/Dropdown";
import { Grid, Row, Col } from "react-bootstrap";

const myText=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur illo quo tempora explicabo omnis mollitia ipsam, pariatur totam nam! Quibusdam error unde mollitia optio quo porro atque, obcaecati ad?Necessitatibus earum inventore mollitia doloremque, perferendisquidem, illum distinctio est quos rem fugit expedita unde amet nihil velit perspiciatis. Non, nihil?";

class App extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} md={12} >
            <div className="App">
            <SiteHeader />
            <Header />
              <Calendar />
              <SideBar text={myText}/>
              <div>
                <p>This is the world where we born and die. </p>
              </div>
              <Dropdown />
                <FooterPage />
            </div>  
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
