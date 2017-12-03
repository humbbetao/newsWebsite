import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as todoActions from './actions/todos';
import CounterComments from './CounterComments';
import FormsErrors from './FormErrors';
import './comments.css'

class Comment extends Component {
    state = {
        user: '',
        email: '',
        comment: '',
        formErrors: { user: '', email: '', comment: '' },
        userValid: false,
        emailValid: false,
        commentValid: false,
        formValid: false
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let userValid = this.state.userValid;
        let commentValid = this.state.commentValid;
        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'user':
                userValid = value.length >= 5;
                fieldValidationErrors.user = userValid ? '' : ' is too short';
                break;
            case 'comment':
                commentValid = value.length >= 15;
                fieldValidationErrors.commment = commentValid ? '' : ' is too short';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            userValid: userValid,
            commentValid: commentValid,
        }, this.validateForm);
    }

    validateForm() {
        this.setState({ formValid: this.state.userValid && this.state.emailValid && this.state.commentValid });
    }

    errorClass(error) {
        return (error.length === 0 ? '' : 'has-error');
    }

    onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({ [name]: value },
            () => {
                this.validateField(name, value)
            });
    }

    addNewComment = (e) => {
        e.preventDefault();

        if (this.state.formValid) {
            this.props.addComment(this.state.user, this.state.email, this.state.comment);
            this.setState({ user: '', email: '', comment: '' })
        }
    };

    render() {
        console.log(this.props.todos)
        return (
            <div className="formComment">
                {/* <ul> */}
                {this.props.todos.map(todo => (
                    <div key={todo.id}>
                        <p><span class="glyphicon glyphicon-user"></span>  {todo.user}</p>
                        <p>Comment: {todo.comment}</p>
                    </div>
                ))}
                {/* </ul> */}
                <CounterComments />
                <h3>Leave a reply</h3>
                <FormsErrors formErrors={this.state.formErrors} />

                <form className="formComment">
                    <div className={`form-group ${this.errorClass(this.state.formErrors.user)}`}>
                        <br />
                        <label htmlFor="nameInput">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="user"
                            name="user"
                            aria-describedby="nameHelp"
                            placeholder="Enter your name"
                            value={this.state.user}
                            onChange={this.onChange}
                        />
                        <small id="nameHelp" className="form-text text-muted">Let us know who you are</small>
                    </div>
                    <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                        <label htmlFor="inputEmail">Email address</label>
                        <input type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                            value={this.state.email}
                            onChange={this.onChange}
                        />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className={`form-group ${this.errorClass(this.state.formErrors.comment)}`}>
                        <label htmlFor="comment">Comment:</label>
                        <textarea className="form-control" rows="5" id="comment" name="comment"
                            value={this.state.comment}
                            onChange={this.onChange}
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary" disabled={!this.state.formValid} onClick={this.addNewComment}>Submit</button>
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
