import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import './header.css';

class ListItensMenu extends Component {
    constructor(props) {
        super(props);
        state.list=this.props.list;
    }
    
    state={
        list:{},
    }

  render() {
    return (
        <ul>
          {this.props.list.map(function(id,listValue){
            return <li key={id}> {listValue} </li>;
          })}
        </ul>
        );
  }
}


export default ListItensMenu;