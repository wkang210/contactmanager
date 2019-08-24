import React, { Component } from 'react';
import {Consumer} from '../context';
import TextInputGrooup from './layout/TextInputGroup';
// import uuid from 'uuid';
import axios from 'axios';

class EditContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {},
    };

    async componentDidMount(){
        const {id} = this.props.match.params;
        const response = await axios.get(`http://jsonplaceholder.typicode.com/users/${id}`);
        const contact = response.data;
        this.setState({
            name: contact.name,
            email: contact.email,
            phone: contact.phone,
        })
    }

    onFieldChange = (e) => {
        // console.log(e);
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit = async (dispatch, e) => {
        e.preventDefault();
        console.log(this.state);

        const {name, email, phone} = this.state;

        //Check for errors
        if(name === ''){
            this.setState({ errors: {name: 'Name is required'}});
            return;
        }

        if(email === ''){
            this.setState({ errors: {email: 'Email is required'}});
            return;
        }

        if(phone === ''){
            this.setState({ errors: {phone: 'Phone is required'}});
            return;
        }

        const updateContact = {
            name : name, 
            email : email, 
            phone : phone,
        }

        const {id} = this.props.match.params;
        const response = await axios.put(`http://jsonplaceholder.typicode.com/users/${id}`, updateContact);

        dispatch({type:'EDIT_CONTACT', payload: response.data})

        //clear state
        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {},
        });

        this.props.history.push('/');
    }

    render() {
        const {name, email, phone, errors} = this.state;

        return(
            <Consumer>  
                {value => {
                    const {dispatch} = value;
                    return(
                        <div className="card mb-3">
                            <div className="card-header">Edit Contact</div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    <TextInputGrooup label="Name" name="name" placeholder="Enter Name..." value={name} onChange={this.onFieldChange} error={errors.name}></TextInputGrooup>
                            
                                    <TextInputGrooup label="Email" name="email" type="email" placeholder="Enter Email..." value={email} onChange={this.onFieldChange} error={errors.email}></TextInputGrooup>
                            
                                    <TextInputGrooup label="Phone" name="phone" type="phone" placeholder="Enter phone..." value={phone} onChange={this.onFieldChange} error={errors.phone}></TextInputGrooup>

                                    <input type="submit" value="Update Contact" className="btn btn-block btn-light"/>
                                </form>
                                
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default EditContact;