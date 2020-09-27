import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SuccessPage extends Component {

    render() {
        return (
            <div style={{ width: '100%', padding: 100, textAlign: 'center' }}> 
                <div style={{ color: 'green', paddingBottom: 15 }}>You are successfully registered with us.</div>
                <div>Go back to <Link to='/'>Login</Link> page.</div>
            </div>
        );
    }
}

export default SuccessPage;