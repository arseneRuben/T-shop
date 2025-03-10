import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavbarToggler, NavbarBrand, Collapse, NavItem, Button, Form, FormGroup, Input, Modal, ModalHeader, ModalBody, Label } from "reactstrap";
import BeforeHeader from "./BeforeHeaderComponent";

class Header extends Component {
    constructor(props){
        super(props)

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);

        this.state = {
            isNavOpen : false,
            isModalOpen : false
        }
       
    }

    toggleNav(){
        this.setState({isNavOpen : !this.state.isNavOpen})
    }

    toggleModal(){
        this.setState({isModalOpen : !this.state.isModalOpen})
    }

    handleLogin(e){
        e.preventDefault()
        this.toggleModal()
        alert("usernane: " + this.username.value + "\npassword: " + this.password.value + "\nremember : "+ this.remember.checked);
    }

    render(){
        return (
            <>
                <BeforeHeader/>
            
                <Navbar light expand="lg" id="myNavBar" className="align-items-center sticky-top ml-0 mb-nd-0 navb">
                    <div className="d-flex justify-content-between ">
                        <NavbarBrand className="mr-2">
                               <img src="logo.png" height="40" width="200"  alt="ty-shop +237" />
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
                                    <Button outline className="btn-perso-1" onClick={this.toggleModal}>Login<i className="fa-solid fa-user fa-lg"></i></Button>
                                </NavItem>                            
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                                <FormGroup>
                                    <Label htmlFor="username">Username</Label>
                                    <Input type="text" id="username" name="username"
                                        innerRef={(input) => this.username = input} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="password">Password</Label>
                                    <Input type="password" id="password" name="password"
                                        innerRef={(input) => this.password = input}  />
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" name="remember"
                                        innerRef={(input) => this.remember = input}  />
                                        Remember me
                                    </Label>
                                </FormGroup>
                                <Button outline type="submit" value="submit" className="btn-perso-1">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </>
        )
    }
}

export default Header;