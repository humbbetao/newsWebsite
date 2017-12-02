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
        return (
            <li className="wow fadeInDown">
                <article className="featured_article">
                    <h2 className="article_title">
                        <p className="article_section">{this.props.new.sectionName} /
                        <Link
                            to={this.props.new.fields.headline}
                            // render={(this.props.new)  =>
                            //     (<News news={this.props.new} />)}}
                             >
                            {this.props.new.fields.headline}
                        </Link>
                        </p>
                    </h2>
                <br />
                <p className="article_trailtex"> {this.props.new.fields.trailText}</p>

                </article>
            </li >
        );
    }
}



export default ItensListContaint;
