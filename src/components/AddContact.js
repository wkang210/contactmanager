import React, { Component } from 'react';
import {Consumer} from '../context';
import TextInputGrooup from './layout/TextInputGroup';
// import uuid from 'uuid';
import axios from 'axios';

class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {},
    };

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

        const newContact = {
            name : name,
            email : email,
            phone : phone,
        }

        const response = await axios.post('https://jsonplaceholder.typicode.com/users', newContact);
        dispatch({type: 'ADD_CONTACT', payload: response.data});


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
                            <div className="card-header">Add Contact</div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    <TextInputGrooup label="Name" name="name" placeholder="Enter Name..." value={name} onChange={this.onFieldChange} error={errors.name}></TextInputGrooup>
                            
                                    <TextInputGrooup label="Email" name="email" type="email" placeholder="Enter Email..." value={email} onChange={this.onFieldChange} error={errors.email}></TextInputGrooup>
                            
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone</label>
                                        <input type="text" className="form-control form-control-lg" placeholder="Enter Phone..." name="phone" value={phone} onChange={this.onFieldChange} error={errors.phone}/>
                                    </div>

                                    <input type="submit" value="Add Contact" className="btn btn-block btn-light"/>
                                </form>
                                
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default AddContact;