import React, { Component } from 'react';

class Footer extends Component {

    render(){
        return (
            <nav className="footer footer-shade navbar navbar-light bg-light">
                <div style={{ fontSize: '13px', textAlign: 'center', paddingTop: 25 }}>
                    Copyright &copy; 2020 - <span style={{ color: 'blue'}}>Deom</span>. All Right Reserved.                   
                </div>
            </nav>
        );
    }
}

export default Footer;
