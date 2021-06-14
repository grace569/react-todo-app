import React, {Component} from "react";

class ToDoListItem extends Component{
    constructor(props) {
        super(props);
        this.createTasks = this.createTasks.bind(this);
    }

    createTasks(item) {
        return <li key={item.key} onClick={() => {item.done = !item.done}}>
            <div>
                <span>{item.text}</span>
                <button type="button" className="close" onClick={() => this.delete(item.key)}>&times;</button>
            </div>
        </li>
    }

    delete(key) {
        this.props.delete(key);
    }
    render() {
        const todoEntries = this.props.entries;
        const listItems = todoEntries.map(this.createTasks);

        return (
            <ul className="theList">
                {listItems}
            </ul>
        );
    }
}

export default ToDoListItem;
