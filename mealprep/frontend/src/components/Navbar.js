import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
        <Link className="navbar-brand" to='/'>MealHelper</Link>
        <button 
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <NavLink className="nav-link" exact to='/'>Home <span className="sr-only">(current)</span></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" exact to='/blog'>Recipies</NavLink>
                </li>
            </ul>
        </div>
    </nav>
);

export default navbar;
