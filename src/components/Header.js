import React from 'react';
import logo from './img/logo.png';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="flex-container">
        <Navbar light expand="md">
          <NavbarBrand href="/"><img className="logo" src={logo} /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://www.food2fork.com/" target="_blank">More recipes</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                 Cooking Tutorials
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                  <NavLink href="https://toriavey.com/how-to/cooking-tutorials/" target="_blank">toriavey.com</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                  <NavLink href="https://www.youtube.com/playlist?list=PL86562563EF386660" target="_blank">youtube.com</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}


