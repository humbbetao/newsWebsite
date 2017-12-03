import React from 'react';
import { connect } from 'react-redux';

const CounterComments = (props) => (
    <h2>Você tem {props.todos.length} todos </h2> 
);

const mapStateToProps = state => ({
    todos : state.todos,
});

export  default connect(mapStateToProps)(CounterComments);