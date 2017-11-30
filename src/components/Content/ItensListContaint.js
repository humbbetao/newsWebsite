import React, { Component } from 'react';
import './bodyNews.css'

class ItensListContaint extends Component {
    render() {

        return (
            <li class="wow fadeInDown">
                <figure class="featured_img"><a href="#"><img src="images/550x400.jpg" alt="" /></a></figure>
                <article class="featured_article">
                    <div class="article_category"><a href="#">Technology <i class="fa fa-angle-right"></i></a><a href="#">Mobile <i class="fa fa-angle-right"></i></a><a href="#">Samsung</a></div>
                    <h2 class="article_titile"><a href="pages/single_page.html">Apple iPad Production Reaches 4 Million</a></h2>
                    <p>Nunc tincidunt, elit non cursus euismod, lacus augue ornare metus, egestas imperdiet nulla nisl quis mauris. Suspendisse a pharetra urna. Morbi dui lectus, pharetra nec elementum eget, vulputate ut nisi. Aliquam accumsan, nulla sed feugiat...</p>
                </article>
            </li>
        );
    }
}



export default ItensListContaint;
