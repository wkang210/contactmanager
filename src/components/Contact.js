import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Consumer} from '../context';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Contact extends Component {
    state = {
        showContactInfo: false,
    };
    
    onShowClick = (e) => {
        this.setState({showContactInfo: !this.state.showContactInfo});
    }

     onDeleteClick = async (id, dispatch) => {
        console.log('delete ', id);
        
        try{
            await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
            dispatch({type:'DELETE_CONTACT', payload: id});
        }
        catch(e){
            dispatch({type:'DELETE_CONTACT', payload: id});
        }
    }

    render() {
        const {id, name, email, phone} = this.props.contact;
        const {showContactInfo} = this.state;

        return (
            <Consumer>  
                {value =>{
                    const {dispatch} = value;
                    return (
                        <div className="card card-body mb-3">
                            <h4>{name}{'  '}
                            
                            <i onClick={this.onShowClick} className={showContactInfo ? "glyphicon glyphicon-triangle-bottom": "glyphicon glyphicon-triangle-right"} style={{cursor:'pointer'}}></i>
                            <i onClick={this.onDeleteClick.bind(this,id, dispatch)} className="glyphicon glyphicon-trash" style={{float:'right',cursor:'pointer', color:'red'}}></i>
                            <Link to={`contact/edit/${id}`}>
                                <i className="glyphicon glyphicon-pencil" style={{cursor:'pointer', float:'right', color:'black', marginRight:'1rem'}}></i>
                            </Link>
                            </h4>
                            {showContactInfo ? (<ul className="list-group">
                                <li className="list-group-item">Email: {email}</li>
                                <li className="list-group-item">Phone: {phone}</li>
                            </ul>) : null}
                            
                        </div>
                    )
                }}
            </Consumer>
           
        )
    }
}

Contact.propTypes = {
    // name: PropTypes.string.isRequired,
    // email: PropTypes.string.isRequired,
    // phone: PropTypes.string.isRequired,
    contact: PropTypes.object.isRequired,
    
};

export default Contact;