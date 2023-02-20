import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h2>Page not found!</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, ea!</p>
            <p>Go to the <Link to="/">home page</Link></p>
        </div>
    );
}

export default NotFound;
