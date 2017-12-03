import React, { Component } from 'react';
import Path from '../../Path';
import { Link } from 'react-router';
import './footer.css'
class Labels extends Component {
    render() {
        // console.log(
        //     Path.map((item, id) => {
        //         return (item.url, item.nome)
        //     }
        //     )
        // );
        return (
            <div className="footer_widget wow fadeInLeftBig">
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
            </div>);
    }
}

export default Labels;