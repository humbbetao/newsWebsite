import React, { Component } from 'react';
import './itensListContaint.css'
import { Link } from 'react-router';
import News from '../../News';

class ItensListContaint extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        console.log(this.props.new)
        var headline = "\"".concat(this.props.new.fields.headline)
        headline.concat("\"")
        console.log(headline)
        return (
            <li className="wow fadeInDown">
                <article className="featured_article">

                    <div className="article_body">
                        <a href="pages/single_page.html">
                            <img src={this.props.new.fields.thumbnail} alt="" />
                        </a>
                        <p className="article_section">

                            <Link  to={"news/" + headline + "\""} >
                              <div dangerouslySetInnerHTML={{ __html: this.props.new.fields.headline }} />
                            </Link>
                        </p>
                        {this.props.new.fields.trailText}
                    </div>
                </article>
            </li >
        );
    }
}



export default ItensListContaint;
