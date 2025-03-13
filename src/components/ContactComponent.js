import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap'
import Title from './TitleComponent';

export default class Contact extends Component {
    constructor(props){
        super(props)

        this.state = {
            firstname : '',
            lastname : '',
            email : '',
            object : '',
            telnum : '',
            agree: false,
            contactType: 'Tel.',
            message: '',
            touched : {
                firstname : false,
                lastname : false,
                email : false,
                object : false,
                telnum : false,
            }

        }
        
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(e){
        const target = e.target;
        const name = target.name;
        const value = target.type === "checkbox" ? target.checked : target.value;
        this.setState({[name]: value});
    }

    handleSubmit(e){
        e.preventDefault()
        
        alert(this.state.firstname)
    }



  render() {

    return (
      <div className='container'> 
        <Title name='contactez' title='nous' />
        <div className='row'>
            <div className='col-12 col-md-9'>
                <Form onSubmit = {this.handleSubmit} id='contact-form'>
                    <FormGroup row>
                        <Label htmlFor="firstname" md={2}>Prenom</Label>
                        <Col md={10}>
                            <Input type="text" id="firstname" name="firstname"
                                placeholder="prenom"
                                value={this.state.firstname}
                                onChange={this.handleInputChange}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="lastname" md={2}>Nom</Label>
                        <Col md={10}>
                            <Input type="text" id="lastname" name="lastname"
                                placeholder="nom"
                                value={this.state.lastname}
                                onChange={this.handleInputChange}
                            />
                            
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="telnum" md={2}>Tel</Label>
                        <Col md={10}>
                            <Input type="tel" id="telnum" name="telnum"
                                placeholder="Tel. number"
                                value={this.state.telnum}
                                onChange={this.handleInputChange}
                            />
                            
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="object" md={2}>objet</Label>
                        <Col md={10}>
                            <Input type="text" id="object" name="object"
                                placeholder="objet"
                                value={this.state.object}
                                onChange={this.handleInputChange}
                            />
                            
                                
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="email" md={2}>Email</Label>
                        <Col md={10}>
                            <Input type="email" id="email" name="email"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.handleInputChange}
                            />
                           
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md={{size: 6, offset: 2}}>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox"
                                        name="agree"
                                        checked={this.state.agree}
                                        onChange={this.handleInputChange}
                                     /> {' '}
                                    <strong>pouvons nous vous contactez?</strong>
                                </Label>
                            </FormGroup>
                        </Col>
                        <Col md={{size: 3, offset: 1}}>
                            <Input type="select" name="contactType"
                                    value={this.state.contactType}
                                    onChange={this.handleInputChange}
                            >
                                <option>Tel.</option>
                                <option>Email</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="message" md={2}>Votre message</Label>
                        <Col md={10}>
                            <Input type="textarea" id="message" name="message"
                                rows="12"
                                value={this.state.message}
                                onChange={this.handleInputChange}
                            />
                            
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md={{size: 10, offset: 2}}>
                            <Button outline className='btn-perso-1' type="submit">
                                Envoyer
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        </div>
      </div>
    );
  }
}
