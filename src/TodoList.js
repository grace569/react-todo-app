import React, { Component } from "react";
import ToDoListItem from './ToDoListItem';
import './ToDoList.css'
import ToDoListHeader from "./ToDoListHeader";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        };
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(res => res.json())
            .then(
                (result) => {
                    const items = result.slice(0,10).map(x => {
                         const item = {
                             text: x.title,
                             key: x.id,
                             done: true,
                         };
                         return item;
                    });
                    this.setState({
                        isLoaded: true,
                        items: items
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    addItem(item){
        if (this._inputElement.value !== '') {
            const newItem = {
                text: this._inputElement.value,
                key: Date.now(),
                done: false
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });

            this._inputElement.value = "";
        }

        item.preventDefault();
    }
    deleteItem(key) {
        const filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key);
        });

        this.setState({
            items: filteredItems
        });
    }
    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="todoListMain">
                    <ToDoListHeader/>
                    <div className="header">
                        <form onSubmit={this.addItem}>
                            <input ref={(a) => this._inputElement = a}
                                   placeholder="enter task">
                            </input>
                            <button type="submit">add</button>
                        </form>
                    </div>
                    <ToDoListItem entries={items} delete={this.deleteItem}/>
                </div>
            );
        }
    }
}

export default TodoList;
