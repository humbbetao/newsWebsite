import React, { Component } from 'react';

class CategoryAndLink extends Component {
    render() {
        return (
            <div>
                <div className="single_widget">
                    <h2>Categories</h2>
                    <ul>
                        <li className="cat-item"><a href="#">Technology</a></li>
                        <li className="cat-item"><a href="#">Games</a></li>
                        <li className="cat-item"><a href="#">Business</a></li>
                        <li className="cat-item"><a href="#">Gallery</a></li>
                        <li className="cat-item"><a href="#">Slider</a></li>
                        <li className="cat-item"><a href="#">Life &amp; Style</a></li>
                        <li className="cat-item"><a href="#">Sports</a></li>
                    </ul>
                </div>
                <div className="single_widget">
                    <h2>Category Archive</h2>
                    <select className="catgArchive">
                        <option>Select Category</option>
                        <option>Life styles</option>
                        <option>Sports</option>
                        <option>Technology</option>
                        <option>Treads</option>
                    </select>
                </div>
                <div className="single_widget">
                    <h2>Links</h2>
                    <ul>
                        <li><a href="#">Log in</a></li>
                        <li><a href="#">Entries RSS</a></li>
                        <li><a href="#">Comment RSS</a></li>
                        <li><a href="#">Wordpress.org</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default CategoryAndLink;