import React, { Component } from 'react'
import { throwStatement } from '@babel/types';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {name: "", quantity: ""}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addItem(this.state)
        this.setState({name: "", quantity: ""})

    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name: </label><br/>
                <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange} /> <br/><br/>
                <label htmlFor="quantity">Quantity: </label><br/>
                <input id="quantity" name="quantity" value={this.state.quantity} onChange={this.handleChange} /> <br/><br/>
                <button>Add Item</button>
            </form>
        )
    }
}

export default Form