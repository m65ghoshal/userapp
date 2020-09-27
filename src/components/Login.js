import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import history from '../history';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import UserPage from './UserPage';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
  });

class Login extends Component {
    constructor(props){
        super(props);
        this.state ={
            email: '',
            password: '',
            errorEmail: false,
            errorPassword: false,
            isUser: false,
        }
    }

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
    };

    login = () => {
        let users = this.props.users;
        let email = this.state.email;
        let password = this.state.password;
        if(email.length > 0 && password.length > 0){
            if(users != null && users != undefined && users.length > 0){
                let user = users.filter(f => { return f.email == email});
                if(user.length > 0){
                    if(email === user[0].email && password === user[0].password){
                        this.setState({ isUser: true });
                        let data = {
                            data: user[0],
                            isUser: true,
                        }
                        history.push({pathname: '/userPage', state: {data: user[0]} });
                        this.props.userData(data);
                        // this.props.isUser(true);
                        // history.push('/userPage');
                        // return <UserPage user={user[0]} />
                    } else {
                        alert('Please enter your valid password.'); 
                    }
                } else {
                    alert('You are not an user. Register from Signup link and come back.');        
                }
            } else {
                alert('Register from Signup link and come back.');    
            }
        } else {
            alert('Please enter your valid email and password.');
        }
    }

    render() {
        const { classes } = this.props;

        return(
            <div className='loginContents'>
                <div style={{ width: '50%', float: 'left'}}>
                    <img alt="logo" src="login.jpg" style={{ height: '77vh', width: '100%' }} />
                </div>
                <div style={{ width: '50%', float: 'right'}}>
                    <div style={{ textAlign: 'center', paddingTop: 30 }}>
                        <div style={{ fontWeight: 'bold', fontSize: 18 }}>Welcome Back</div>
                        <div style={{ fontSize: 11 }}>Sign In to your Account</div>
                        <div style={{ width: '65%', marginLeft: '18%', marginTop: 20, marginBottom: 20, border: '1px solid blue', borderRadius: '10px' }}>
                            <div style={{ padding: 10 }}>
                                <form className={classes.container} noValidate autoComplete="off">
                                    <TextField
                                        required
                                        error={this.state.errorEmail}
                                        placeholder="Email"
                                        id="email"
                                        label="Email"
                                        // className={classes.textField}
                                        type="email"
                                        value={this.state.email}
                                        onChange={this.handleChange('email')}
                                        margin="normal"
                                        // helperText={"Some important text"}
                                        fullWidth
                                    />
                                    <TextField
                                        required
                                        error={this.state.errorPassword}
                                        placeholder="Password"
                                        id="password-input"
                                        label="Password"
                                        // className={classes.textField}
                                        type="password"
                                        autoComplete="current-password"
                                        value={this.state.password}
                                        onChange={this.handleChange('password')}
                                        margin="normal"
                                        // helperText={"Some important text"}
                                        fullWidth
                                    />
                                    <Button 
                                        variant="contained" 
                                        color="primary" 
                                        className={classes.button}
                                        style={{ marginLeft: '40%', marginTop: 20, marginBottom: 20 }}
                                        onClick={this.login}
                                    >
                                        Login
                                    </Button>
                                </form>
                            </div>
                        </div>
                        <div>
                            Don't have account? <span onClick={() => { history.push('/register') }} className='regLink' >Signup</span>
                            {/* Don't have account? <Link to='/register' className='regLink' >Signup</Link> */}
                        </div>
                    </div>
                </div>
                
            </div>
        );
        
    }

}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
};

let mapStateToProps = (state) => {
    return {
        users: state.users,
    };
};
export default connect(mapStateToProps) (withStyles(styles)(Login));