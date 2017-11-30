import React, { Component } from 'react';
import './itensListContaint.css'

class ItensListContaint extends Component {
    render() {

        return (
            <li class="wow fadeInDown">
                <article class="featured_article">
                    <h2 class="article_title">
                        <a href="pages/single_page.html">
                            Apple iPad Production Reaches 4 Million
                        </a>

                    </h2>
                    <div class="article_category">
                        <a href="#">
                            Technology
                            <i class="fa fa-angle-right"></i>
                        </a>

                    </div>
                    <p>Nunc tincidunt, elit non cursus euismod, lacus augue ornare metus, egestas imperdiet nulla nisl quis mauris. Suspendisse a pharetra urna. Morbi dui lectus, pharetra nec elementum eget, vulputate ut nisi. Aliquam accumsan, nulla sed feugiat...</p>
                </article>
            </li>
        );
    }
}



export default ItensListContaint;
