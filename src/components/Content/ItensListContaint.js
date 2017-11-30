import React, { Component } from 'react';
import './itensListContaint.css'

class   ItensListContaint extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // consle.log(this.props.new)
        return (
            <li className="wow fadeInDown">
                <article className="featured_article">
                    <h2 className="article_title">
                        <a href="pages/single_page.html">
                            {this.props.new.webTitle}
                        </a>
                        
                    </h2>
                    {this.props.new.webPublicationDate}
                    <div className="article_category">
                        <a href="#">
                        {this.props.new.sectionName}
                            <i className="fa fa-angle-right"></i>
                        </a>

                    </div>
                    <p>
                    {this.props.new.fields.bodyText}
                    </p>
                </article>
            </li>
        );
    }
}



export default ItensListContaint;
