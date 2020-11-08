import React, { Component } from "react";

import "./TodoItem.css";

class TodoItem extends Component {
  render() {
    const { item, onPress } = this.props;

    // using clasic way
    // let className = "TodoItem";
    // if (item.isComplete) {
    //   className += " TodoItem-complete";
    // }

    // using classnames library
    var classNames = require("classnames");
    var titleClassNames = classNames({
      TodoItem: true,
      "TodoItem-complete": item.isComplete,
    });

    return (
      <div onClick={() => onPress(item.id)} className={titleClassNames}>
        <p>{this.props.item.title}</p>
      </div>
    );
  }
}

export default TodoItem;