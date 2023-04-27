import React from 'react';
import { Link } from 'react-router-dom';

const home = () => (
    <div className='container'>
        <div className="jumbotron mt-5">
            <h1 className="display-4">Here Comes the Ultimate Meal Prep </h1>
            <p className="lead">Our Webpage is filled with savoury Recipies</p>
            <hr className="my-4" />
            <p>Check out Some Of our awesome dishes .</p>
            <Link className="btn btn-primary btn-lg" to='/blog' role="button">Flavour Town</Link>
        </div>
    </div>
);

export default home;
