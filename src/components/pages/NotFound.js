import React from 'react';
import '../css/notfound.css';
import notFound from './img/404Notfound2.png'

const NotFound = () =>
    <div className="newsBody error" >
        <h3>404 page not found</h3>
        <p>We are sorry but the page you are looking for does not exist.</p>
        <img src={notFound} alt="Error 404, page not found" title="Error 404, page not found" />
    </div>

export default NotFound;