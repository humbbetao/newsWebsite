import React, { Component } from 'react';
import './css/itensListContaint.css'
import { Link } from 'react-router';

class ItensListContaint extends Component {
    render() {
        var headline =this.props.new.fields.headline
        return (
            <li>
                <article className="featured_article">
                    <div className="article_body">
                        <Link to={'news/'.concat(headline)} >
                            <img src={this.props.new.fields.thumbnail} alt="" />
                        </Link>
                    </div>
                    <div className="article_section">
                        <div className="article_title">
                            <Link to={'news/'.concat(headline)} >
                                <div dangerouslySetInnerHTML={{ __html: this.props.new.fields.headline }} />
                            </Link>
                        </div>
                        <div className="article_trailtex">
                            {this.props.new.fields.trailText}
                        </div>
                    </div>
                </article>
            </li >
        );
    }
}

export default ItensListContaint;
