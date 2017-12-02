import React, { Component } from 'react';

class Comment extends Component {
    render() {
        {/* Single Page Application */ }
        return (
            <div className="col-lg-9">
                <ul>
                    <li>Oi</li>
                </ul>
                <h3>Leave a replay</h3>
                <form>
                    <div class="form-group">
                        <label for="nameInput">Name</label>
                        <input type="text" class="form-control" id="nameInput" aria-describedby="nameHelp" placeholder="Enter your name" />
                        <small id="nameHelp" class="form-text text-muted">Let's we know who your is;</small>
                    </div>
                    <div class="form-group">
                        <label for="inputEmail">Email address</label>
                        <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="comment">Comment:</label>
                        <textarea class="form-control" rows="5" id="comment"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}


export default Comment;
