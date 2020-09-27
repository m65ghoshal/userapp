import React, { Component } from 'react';
import history from '../history';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

class UserPage extends Component{

    constructor(props){
        super(props);
    }

    // static propTypes = {
    //     match: PropTypes.object.isRequired,
    //     location: PropTypes.object.isRequired,
    //     history: PropTypes.object.isRequired
    //   }


    userNamePopulate = (userHistory) => {
        let returnEle = '';
        try {
            if(Object.values(userHistory.location.state) != null && Object.values(userHistory.location.state) != undefined){
                let userData = Object.values(userHistory.location.state);
                if(userData != null && userData != undefined && userData.length > 0){
                    let data = userData[0];
                    returnEle = <div><span style={{ color: 'blue', folat: 'left' }}>
                        <span style={{ fontWeight: 'bold', fontSize: 20 }}>Welcome, </span>
                        <span style={{ fontWeight: 'bold', fontSize: 16 }}>{data.fname+' '+data.lname}</span>
                    </span>
                    <span style={{ paddingLeft: 20, fontSize: 13, folat: 'right' }}><Link to='/'>Logout</Link></span>
                    </div>
                }
            } else {
                history.push('/');
            }
        } catch (error) {
            console.error('Error on UserPage -> userNamePopulate() : '+error);
            history.push('/');
        }
        return returnEle;
    }

    userDataPopulate = (userHistory) => {
        try {
            if(Object.values(userHistory.location.state) != null && Object.values(userHistory.location.state) != undefined){
                let userData = Object.values(userHistory.location.state);
                if(userData != null && userData != undefined && userData.length > 0){
                    let data = userData[0];
                    let returnEle = null;
                    let style = {color: 'grey', width: 150, float: 'left' };
                    let divStyle = { padding: 5 };
                    returnEle = <div>
                        <div style={divStyle}><span style={style}>First Name</span> : {data.fname}</div>
                        <div style={divStyle}><span style={style}>Last Name</span> : {data.lname}</div>
                        <div style={divStyle}><span style={style}>Email</span> : {data.email}</div>
                        <div style={divStyle}><span style={style}>Phone</span> : {data.phone}</div>
                        <div style={divStyle}><span style={style}>Address Line1</span> : {data.addline1}</div>
                        <div style={divStyle}><span style={style}>Address Line2</span> : {data.addline2}</div>
                        <div style={divStyle}><span style={style}>City</span> : {data.city}</div>
                        <div style={divStyle}><span style={style}>State</span> : {data.state}</div>
                        <div style={divStyle}><span style={style}>Zip</span> : {data.zip}</div>
                        <div style={divStyle}><span style={style}>Country</span> : {data.country}</div>
                    </div>
                    return returnEle;
                } else {
                    history.push('/');
                }
            } else {
                history.push('/');
            }
        } catch (error) {
            console.error('Error on UserPage -> userDataPopulate() : '+error);
            history.push('/');
        }
        
    }

    render() {
        // let d = Object.values(this.props.data.location.state);
        return(
            <div className="formContainer" style={{ width: '65%', marginLeft: '5%', marginTop: '-25px', marginBottom: 20 }}> 
                <div style={{ width: '50%', marginTop: '40px'}}>
                    {this.userNamePopulate(this.props.data)}
                </div>
                <div>Your Details are Below</div>
                <hr />
                <div style={{ width: '50%', marginTop: '10px'}}>
                    {this.userDataPopulate(this.props.data)}
                </div>
                <hr />
            </div>
        );
    }
}

UserPage.childContextTypes = {
    location: React.PropTypes
}

let mapStateToProps = (state) => {
    return {
        
    };
};

export default connect(mapStateToProps) (UserPage);