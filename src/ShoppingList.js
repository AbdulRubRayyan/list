import React, { Component } from 'react'
import Form from './Form'
import uuid from 'uuidv4'
import { throwStatement } from '@babel/types'

class ShoppingList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [
                {name: "Eggs", quantity: "2 dozens", id: uuid()},
                {name: "Mutton", quantity: "1 kg", id: uuid()}
            ]
        }
        this.addItem = this.addItem.bind(this)
    }

    addItem(item) {
        let newItem = { ...item, id: uuid()}
        this.setState(st => ({
            items: [...st.items, newItem]
        }))
    }

    renderItems() {
        return (
            <ul>
                {this.state.items.map(item => (
                    <li key={item.id}>
                        {item.name}: {item.quantity}
                    </li>
                ))}
            </ul>
        )
    }

    render() {
        return (
            <div>
                <h1>Shopping List</h1>
                {this.renderItems()}
                <Form addItem={this.addItem} />
            </div>
        )
    }

}
export default ShoppingList;
