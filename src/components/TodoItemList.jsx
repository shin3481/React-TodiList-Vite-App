import { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
    render() {
        const { myTodos, myToggle, myRemove } = this.props;
        const todoList = myTodos.map();
        return (
            <div>
                {todoList}
            </div>
        );
    }
}

TodoItemList.propTypes = {
    myTodos: PropTypes.array,
    myToggle: PropTypes.func,
    myRemove: PropTypes.func
};
export default TodoItemList;