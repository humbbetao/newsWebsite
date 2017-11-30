import React, { Component } from 'react';

class CategoryAndLink extends Component {
    render() {
        return (
            <div>
                <div class="single_widget">
                    <h2>Categories</h2>
                    <ul>
                        <li class="cat-item"><a href="#">Technology</a></li>
                        <li class="cat-item"><a href="#">Games</a></li>
                        <li class="cat-item"><a href="#">Business</a></li>
                        <li class="cat-item"><a href="#">Gallery</a></li>
                        <li class="cat-item"><a href="#">Slider</a></li>
                        <li class="cat-item"><a href="#">Life &amp; Style</a></li>
                        <li class="cat-item"><a href="#">Sports</a></li>
                    </ul>
                </div>
                <div class="single_widget">
                    <h2>Category Archive</h2>
                    <select class="catgArchive">
                        <option>Select Category</option>
                        <option>Life styles</option>
                        <option>Sports</option>
                        <option>Technology</option>
                        <option>Treads</option>
                    </select>
                </div>
                <div class="single_widget">
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