import React, { Component } from 'react'
import { Navbar,NavItem,Button,Nav,Row,Col,Form,FormGroup,Input} from 'reactstrap'
import { NavLink } from 'react-router-dom'
import CartSpecific from './CartSpecificComponent';


class NavSmallScreen extends Component {
    render() {
        return (
                <Navbar light expand="lg"  className="align-items-center  d-block d-lg-none navb " id='navBarSmallScreen'>
                    <div className='container'>
                      <Row style={{width : '100%'}}>
                          <Col xs='8' sm='6'>
                            <Nav className="myNavbar3">
                                <NavItem>
                                <Form onSubmit={this.handleSubmit}>
                                        <FormGroup>
                                            <Input type='text' id='searchbox' 
                                                name='searchbox' 
                                                placeholder="search..."

                                            />
                                            <Button><i className="fas fa-search"></i></Button>
                                        </FormGroup>
                                </Form>
                                </NavItem>
                            </Nav>
                          </Col>

                          <Col xs={{size : 4}} sm='6' className='pr-0'>
                            <Nav className="myNavbar2 ml-0 ml-lg-auto flex-row align-items-center justify-content-around" navbar>
                                
                                <NavItem onClick = {this.props.toggleModal}>
                                    
                                        <i className="fas fa-user fa-lg" style={{fontSize : '25px'}}></i>
                                    
                                </NavItem>
                                <NavItem>
                                        <CartSpecific mobile={true}/>
                                   
                                </NavItem>

                            </Nav>
                          </Col>
                      </Row>

                    </div>
                </Navbar>
            
        );
    }
}

export default NavSmallScreen;