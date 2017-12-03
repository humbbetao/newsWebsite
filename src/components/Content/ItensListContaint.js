import React, { Component } from 'react';
import './itensListContaint.css'
import { Link } from 'react-router';

class ItensListContaint extends Component {
    render() {
        var headline = "\"".concat(this.props.new.fields.headline)
        headline.concat("\"")
        return (
            <li className="wow fadeInDown">
                <article className="featured_article">

                    <div className="article_body">
                        <Link to={"news/" + headline + "\""} >
                            <img src={this.props.new.fields.thumbnail} alt="" />
                        </Link>
                        <p className="article_section">

                            <Link to={"news/" + headline + "\""} >
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
