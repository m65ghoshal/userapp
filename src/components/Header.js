import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import history from '../history';

class Header extends Component {

    render(){
        return (
            <div>
            <nav className="header navbar navbar-dark bg-dark">
                <Link className="navbar-brand mb-0" to='/'>
                    User Home
                </Link>
                
                <div>
                    Icons    
                </div>
            </nav>
            </div>
        );
    }
}

export default Header;
