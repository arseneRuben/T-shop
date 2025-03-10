import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavbarToggler, NavbarBrand, Collapse, NavItem, Button, Form, FormGroup, Input } from "reactstrap";
import BeforeHeader from "./BeforeHeaderComponent";

class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            isNavOpen : false
        }
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState({isNavOpen : !this.state.isNavOpen})
    }

    render(){
        return (
            <>
                <BeforeHeader/>
            
                <Navbar light expand="lg" id="myNavBar" className="align-items-center sticky-top ml-0 mb-nd-0 navb">
                    <div className="d-flex justify-content-between ">
                        <NavbarBrand className="mr-2">
                            <NavLink to="/home">
                               <img src="logo.png" height="40" width="200"  alt="ty-shop +237" />
                            </NavLink>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav}/>
                        <Collapse navbar isOpen={this.state.isNavOpen}>
                            <Nav navbar id="myNavBar1" className="m-4">
                            
                                <NavItem  className="mr-2 p-2"><NavLink to="/home">Products</NavLink></NavItem>
                                
                               
                                <NavItem  className="mr-2 p-2 mt-2 mt-lg-0"> <NavLink to="/contact">Contact-Us  </NavLink></NavItem>
                            </Nav>

                            <Nav navbar className="myNavBar3 d-none d-lg-block">
                                <NavItem>
                                    <Form>
                                        <FormGroup  className="d-flex">
                                            <Input type="text" id="searchbox"  name="searchbox"  placeholder="search..." className="mt-3"/>
                                            <Button  className="mt-3 "><i className="fa-solid fa-magnifying-glass fa-lg"></i></Button>
                                        </FormGroup>
                                    </Form>
                                </NavItem>
                            </Nav>
                            <Nav navbar className="myNavBar2 ml-0 ml-lg-auto align-items-lg-center">
                                <NavItem className="mr-2   d-none d-lg-block">
                                    <NavLink to="/cart">
                                        <Button outline className="btn-perso-1">Mon panier<i className="fa-solid fa-cart-shopping fa-lg"></i></Button>
                                    </NavLink>
                                </NavItem>
                                <NavItem className="mr-2   d-none d-lg-block">
                                    <Button outline className="btn-perso-1">Login<i className="fa-solid fa-user fa-lg"></i></Button>
                                </NavItem>                            
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </>
        )
    }
}

export default Header;