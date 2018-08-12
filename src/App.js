import React, { Component } from 'react';
import {Jumbotron, Row,Col,Navbar,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap';
import YearChart from './containers/YearChart';
import SegmentChart from './containers/SegmentChart';
import NameChart from './containers/NameChart';
import DataTableC from './containers/DataTableC';
import PersonPerHouseholdBarChart from './containers/PersonPerHouseholdBarChart';
import AvgAgeBarChart from './containers/AvgAgeBarChart';
import PopulationBarChart from './containers/PopulationBarChart';
import UnemploymentRateBarChart from './containers/UnemploymentRateBarChart';
import MapC from './containers/MapC';

class App extends Component {
  
  render() {
    return (
      <div>
      <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#brand">Demo Program</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">
            Home
          </NavItem>
          <NavDropdown eventKey={3} title="DashBoards" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
            Logout
          </NavItem>
          <NavItem eventKey={2} href="#">
            Details
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
      <Jumbotron>
        <Row>
          <Col md={1}></Col>
          <Col md={2}><YearChart/></Col>
          <Col md={2}><SegmentChart/></Col>
          <Col md={2}><NameChart/></Col>
          <Col md={4}><MapC/></Col>
          <Col md={1}></Col>
        </Row>
        <Row>
          <Col md={1}></Col>
          <Col md={2}><PersonPerHouseholdBarChart/></Col>
          <Col md={2}><AvgAgeBarChart/></Col>
          <Col md={3}><PopulationBarChart/></Col>
          <Col md={3}><UnemploymentRateBarChart/></Col>
          <Col md={1}></Col>
        </Row>
        <Row>
          <Col md={1}></Col>
          <Col md={10}><DataTableC/></Col>
          <Col md={1}></Col>
        </Row>
      </Jumbotron>
      </div>
    );
  }
}

export default App;
