import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="jumbotron container mt-5">
            <h1 className="display-4">Hello, world!</h1>
            <p className="lead">Welcom to the to do list!</p>
            <hr className="my-4" />
            <p>Come and use this application to organize your life</p>
            <p className="lead">
                <Link className="btn btn-primary btn-lg" to="/todolist" role="button">Create a list</Link>
            </p>
        </div>
    );
}

export default Home;
