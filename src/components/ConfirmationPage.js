import React, { Component } from 'react';

class ConfirmationPage extends Component {
    constructor(props){
        super(props);
        this.state ={}
    }

    userDataPopulate = (data) => {
        let returnEle = null;
        let style = {color: 'grey', width: 150, float: 'left' };
        returnEle = <div>
            <div><span style={style}>First Name</span> : {data.fName}</div>
            <div><span style={style}>Last Name</span> : {data.lName}</div>
            <div><span style={style}>Email</span> : {data.email}</div>
            <div><span style={style}>Phone</span> : {data.phone}</div>
        </div>
        return returnEle;
    }

    addDataPopulate = (data) => {
        let returnEle = null;
        let style = {color: 'grey', width: 150, float: 'left' };
        returnEle = <div>
            <div><span style={style}>Address Line1</span> : {data.addLine1}</div>
            <div><span style={style}>Address Line2</span> : {data.addLine2}</div>
            <div><span style={style}>City</span> : {data.city}</div>
            <div><span style={style}>State</span> : {data.st}</div>
            <div><span style={style}>Zip</span> : {data.zip}</div>
            <div><span style={style}>Country</span> : {data.country}</div>
        </div>
        return returnEle;
    }

    render() {
        let userData = this.props.userData;
        let addData = this.props.addData;
        return (
            <div className="formContainer" style={{ width: '65%', marginLeft: '5%', marginTop: '-25px', marginBottom: 20 }}> 
                <div style={{ width: '50%', float: 'left', marginTop: '20px'}}>
                    {this.userDataPopulate(userData)}
                </div>
                <div style={{ width: '50%', float: 'right', marginTop: '20px'}}>
                    {this.addDataPopulate(addData)}
                </div>
            </div>
        );
    }
}

export default ConfirmationPage;