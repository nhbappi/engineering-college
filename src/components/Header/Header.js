import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
        <div className='nav-container'>

            <div className="p-2">
                <h3>Engineering University</h3>
            </div>
            <div>
                <nav className="nav-bar">
                <NavLink  className="active" to="/home">Home</NavLink>
                <NavLink  className="active" to="/courses">Courses</NavLink>
                <NavLink  className="active" to="/teacher">Teachers</NavLink>
                <NavLink  className="active" to="/about">About</NavLink>
                </nav>

            </div>           
        </div>
    );
};

export default Header;