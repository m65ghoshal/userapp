import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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


class UserForm extends Component {

    constructor(props){
        super(props);
        this.state ={
            fName: '',
            lName: '',
            email: '',
            phone: '',
            password: '',
            confirmPassword: '',
            isError: false,
            errorMsg: [],
            helperText: [],
            errorText: '',
        }
    }

    componentDidMount(){
        let _state = this.state;
        if(this.props.userData != null){
            _state = this.props.userData;    
        }
        this.setState({ _state })
    }

    handleChange = name => event => {
        let value = event.target.value;
        let _state = this.state;
        if(this.props.userData != null || this.props.userData != undefined){
            _state = this.props.userData;
        }
        let isValid = true;
        if(name == 'phone'){
            if(isNaN(value)){
                isValid = false;
                _state.helperText[name] = 'Enter valid number';
            } else {
                _state.helperText[name] = '';
            }

        }
        if(isValid){
            _state[name] = value;
            this.isValid(name, value, _state);
        }
        this.props.formData(_state);
        this.setState({ _state });
    };

    isValid = (name, value, _state) => {
        let tempError = false;
        if(name === 'email'){
            if(value.length > 0){
                let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                let isValid =  re.test(value);
                if(isValid){
                    _state.helperText[name] = '';
                    tempError = false;
                } else {
                    _state.helperText[name] = 'Enter valid email';
                    tempError = true;
                }
            }
        }
        if(name === 'password'){
            if(value.length < 6){
                _state.helperText['password'] = 'Password must be more than 6 character';
                tempError = true;
            } else {
                _state.helperText['password'] = '';
                tempError = false;
            }
        }
        if(name === 'confirmPassword'){
            if(value != _state.password){
                _state.helperText['confirmPassword'] = 'Password must be same';
                tempError = true;
            } else {
                _state.helperText['confirmPassword'] = '';
                tempError = false;
            }
        }
        let isError = _state.isError;
        if(isError || tempError){
            _state.isError = tempError;
        }
        this.setState({ _state });
    }

    render() {
        const { classes } = this.props;
        let _state = this.state;
        if(this.props.userData != null || this.props.userData != undefined){
            _state = this.props.userData;
        }
        return (
            <div className="formContainer" style={{ width: '65%', marginLeft: '5%', marginTop: '-25px', marginBottom: 20 }}>
                <form className={classes.container} noValidate autoComplete="off">
                    <div>
                    <TextField
                        required
                        placeholder="First Name"
                        id="fName"
                        label="First Name"
                        className={classes.textField}
                        type="text"
                        value={_state.fName}
                        onChange={this.handleChange('fName')}
                        margin="normal"
                        // helperText={_state.helperText['fName']}
                        // fullWidth
                        style={{ width: '300px', marginLeft: 15, marginRight: 15 }}
                    />
                    <TextField
                        required
                        placeholder="Last Name"
                        id="lName"
                        label="Last Name"
                        className={classes.textField}
                        type="text"
                        value={_state.lName}
                        onChange={this.handleChange('lName')}
                        margin="normal"
                        // helperText={"Some important text"}
                        // fullWidth
                        style={{ width: '300px', marginLeft: 15, marginRight: 15 }}
                    />
                    </div>
                    <div>
                    <TextField
                        required
                        placeholder="Email"
                        id="email"
                        label="Email"
                        className={classes.textField}
                        type="text"
                        value={_state.email}
                        onChange={this.handleChange('email')}
                        margin="normal"
                        helperText={_state.helperText['email']}
                        // fullWidth
                        style={{ width: '300px', marginLeft: 15, marginRight: 15 }}
                    />
                    <TextField
                        required
                        placeholder="Phone"
                        id="phone"
                        label="Phone"
                        className={classes.textField}
                        type="text"
                        value={_state.phone}
                        onChange={this.handleChange('phone')}
                        margin="normal"
                        helperText={_state.helperText['phone']}
                        // fullWidth
                        style={{ width: '300px', marginLeft: 15, marginRight: 15 }}
                    />
                    </div>
                    <div>
                    <TextField
                        required
                        error={this.state.errorPassword}
                        placeholder="Password"
                        id="password-input"
                        label="Password"
                        className={classes.textField}
                        type="password"
                        autoComplete="current-password"
                        value={_state.password}
                        onChange={this.handleChange('password')}
                        margin="normal"
                        helperText={_state.helperText['password']}
                        // fullWidth
                        style={{ width: '300px', marginLeft: 15, marginRight: 15 }}
                    />
                    <TextField
                        required
                        error={this.state.errorPassword}
                        placeholder="Confirm Password"
                        id="password-input"
                        label="Confirm Password"
                        className={classes.textField}
                        type="password"
                        autoComplete="current-password"
                        value={_state.confirmPassword}
                        onChange={this.handleChange('confirmPassword')}
                        margin="normal"
                        helperText={_state.helperText['confirmPassword']}
                        // fullWidth
                        style={{ width: '300px', marginLeft: 15, marginRight: 15 }}
                    />
                    </div>
                </form>
            </div>
        );
    }
}

UserForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles) (UserForm);