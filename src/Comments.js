import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as todoActions from './actions/todos';
import { connect } from 'react-redux';

class Comment extends Component {
    constructor(props) {
        super(props);
        console.log(props);

    }

    state = {
        newTodoText: '',
    }
    addNewTodo = () => {
        this.props.addTodo(this.state.newTodoText);
        this.setState({ newTodoText: '' })
    };

    render() {
        {/* Single Page Application */ }
        return (
            <div classNameName="col-lg-9">
                <ul>
                    {this.props.todos.map(todo => (
                        <li key={todo.id}>{todo.text}</li>
                    ))}
                </ul>
                <h3>Leave a replay</h3>
                <form>
                    <div className="form-group">
                        <label for="nameInput">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="nameInput"
                            aria-describedby="nameHelp"
                            placeholder="Enter your name"
                            value={this.state.newTodoText}
                            onChange={(e) => this.setState({ newTodoText: e.target.value })}
                        />
                        <small id="nameHelp" className="form-text text-muted">Let's we know who your is;</small>
                    </div>
                    <div className="form-group">
                        <label for="inputEmail">Email address</label>
                        <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label for="comment">Comment:</label>
                        <textarea className="form-control" rows="5" id="comment"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.addNewTodo}>Submit</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(todoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
