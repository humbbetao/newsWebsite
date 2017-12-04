import React from 'react';
import { connect } from 'react-redux';

const CounterComments = (props) => (
    <h6>This news has {props.todos.length} comments </h6> 
);

const mapStateToProps = state => ({
    todos : state.todos,
});

export  default connect(mapStateToProps)(CounterComments);