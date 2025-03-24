import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import { Navbar, Nav, NavbarToggler, NavbarBrand, Collapse, NavItem, Button, Form, FormGroup, Input, Modal, ModalHeader, ModalBody, Label } from "reactstrap";
import BeforeHeader from "./BeforeHeaderComponent";
import NavSmallScreen from "./NavSmallScreenComponent";
import CartSpecific from "./CartSpecificComponent";
import { useNavigate } from 'react-router-dom';  // Import useNavigate


const SearchBtn = () => {
    const navigate = useNavigate();
    return (
        <button className="mt-3 btn btn-default" type="submit" onClick={() => navigate('/home/search')}>
            <i className="fa-solid fa-magnifying-glass fa-lg"></i>
        </button>
    );
};

class Header extends Component {
    constructor(props){
        super(props)

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            isNavOpen : false,
            isModalOpen : false,
            search : ''
        }
       
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.search(this.state.search);
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
                                    <Form  onSubmit={this.handleSubmit}>
                                        <FormGroup  className="d-flex">
                                            <Input type="text" id="searchbox_"
                                              name="searchbox"  placeholder="search..." 
                                              value = {this.state.search}
                                              onChange={(e)=> this.setState({search : e.target.value})}
                                              className="mt-3"/>
                                              <SearchBtn />
                                        </FormGroup>
                                    </Form>
                                </NavItem>
                            </Nav>
                            <Nav navbar className="myNavBar2 ml-3 mr-3  ml-lg-auto m-4 align-items-lg-center">
                                <NavItem className="mr-2 px-3  d-inline-block  ">
                                    <NavLink to="/cart">
                                        <CartSpecific mobile={false} nbProduit={this.props.nbProduit}/>
                                    </NavLink>
                                </NavItem>
                                <NavItem className="mx-2  px-3   d-none d-lg-block">
                                    <Button outline className="btn-perso-1" onClick={this.toggleModal}>Login<i className="fa-solid fa-user fa-lg"></i></Button>
                                </NavItem>                            
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <NavSmallScreen toggleModal={this.toggleModal} nbProduit={this.props.nbProduit} />
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