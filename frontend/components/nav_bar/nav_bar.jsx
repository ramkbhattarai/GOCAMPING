import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
    const display = currentUser ? (
        <div>
            <h2>Welcome {currentUser.fname}</h2>
            <button onClick={logout}>Logout</button>
        </div>
    ) : (
            <div>
                <Link className="button" to="/signup">Sign Up</Link>
                <Link className="button" to="/login">Log In</Link>
                
            </div>
        );
    return (
        <header className="nav-bar">
            <h3 className="logo">GoCamping</h3>
            
            <div>
                {display}
            </div>
        </header>
    )
}