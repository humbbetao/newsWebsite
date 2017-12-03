import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as todoActions from './actions/todos';
import { connect } from 'react-redux';
import CounterComments from './CounterComments';
import './comments.css'
class Comment extends Component {
    state = {
        user: '',
        email: '',
        comment: '',
    }
    addNewComment = () => {
        this.props.addComment(this.state.user, this.state.email, this.state.comment);
        this.setState({ user: '', email: '', comment: '' })
    };

    render() {
        return (
            <div className="formComment">
                <ul>

                    {this.props.todos.map(todo => (
                        <div key={todo.id}>
                            Name:  {todo.text}

                        </div>
                    ))}
                </ul>
                <CounterComments />
                <h3>Leave a reply</h3>
                <form className="formComment">
                    <div className="form-group">
                        <br />
                        <label htmlFor="nameInput">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="nameInput"
                            aria-describedby="nameHelp"
                            placeholder="Enter your name"
                            value={this.state.user}
                            onChange={(e) => this.setState({ user: e.target.value })}
                        />
                        <small id="nameHelp" className="form-text text-muted">Let us know who you are</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputEmail">Email address</label>
                        <input type="email"
                            className="form-control"
                            id="inputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                            value={this.state.email}
                            onChange={(e) => this.setState({ email: e.target.value })}
                        />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="comment">Comment:</label>
                        <textarea className="form-control" rows="5" id="comment"
                            value={this.state.comment}
                            onChange={(e) => this.setState({ comment: e.target.value })}
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.addNewComment}>Submit</button>
                    <br />
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
