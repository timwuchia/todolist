import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary justify-content-between">
                <Link className="navbar-brand text-white" to="/">To Do List</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link text-white" to="/todolist">My Lists</Link>
                        <Link className="nav-item nav-link text-white" to="/addtodo">Add Item</Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;
