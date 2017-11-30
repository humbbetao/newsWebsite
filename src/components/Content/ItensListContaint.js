import React, { Component } from 'react';
import './itensListContaint.css'

class ItensListContaint extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // consle.log(this.props.new)
        return (
            <li className="wow fadeInDown">
                <article className="featured_article">
                    <h2 className="article_title">
                        <p className="article_section">{this.props.new.sectionName} / 
                            <a href="pages/single_page.html">
                                {this.props.new.fields.headline}
                            </a>
                        </p>
                    </h2>

                    <br />

                    <p className="article_trailtex"> {this.props.new.fields.trailText}</p>

                </article>
            </li>
        );
    }
}



export default ItensListContaint;
