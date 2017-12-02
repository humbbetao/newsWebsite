import React, { Component } from 'react';

class News extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (

            <div>
                <div className="header_news">
                    {this.props.new.title}

                </div>
                <div className="containt_news">
                    {this.props.new.body_text}
                </div>
            </div>
        );

    }
}



export default News;
