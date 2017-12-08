import React, { Component } from 'react';
import { Link } from 'react-router';
import Path from '../Path';
import './css/labels.css'

class Labels extends Component {
    render() {

        return (
            <div className="footer_widget">
                <h2>Site's map</h2>
                <ul className="labels_nav">

                    {Path.map((item, id) => {
                        return (
                            <li key={id}>
                                <Link to={item.url}>
                                    {item.nome}
                                </Link>
                            </li>)
                    })}
                </ul>
            </div>
        );
    }
}

export default Labels;