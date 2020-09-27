import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import UserForm from './UserForm';
import AdditionalForm from './AdditionalForm';
import ConfirmationPage from './ConfirmationPage';
import history from '../history';
import { createUser } from "../actions";

const styles = theme => ({
    root: {
      width: '90%',
    },
    button: {
      marginRight: theme.spacing.unit,
    },
    instructions: {
      marginTop: theme.spacing.unit,
      marginBottom: theme.spacing.unit,
    },
  });
  
  function getSteps() {
    return ['User From', 'Additional Details', 'Confirmation'];
  }
  
  

class Register extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            activeStep: 0,
            userData: null,
            addData: null,
            errorText: '',
        };
    }

    getStepContent = (step) => {
        switch (step) {
          case 0:
            return <UserForm formData={this.formData} userData={this.state.userData} />;
          case 1:
            return <AdditionalForm additionalData={this.additionalData} addData={this.state.addData} />;
          case 2:
            return <ConfirmationPage userData={this.state.userData} addData={this.state.addData} />;
          default:
            return 'Unknown step';
        }
      }

      formData = (data) => {
        console.log(data);
        // this.state.userData = data;
        this.setState({ userData: data, errorText: '' });
      }

      additionalData = (data) => {
        console.log(data);
        this.setState({ addData: data, errorText: '' });
      }
    
      handleNext = () => {
        const { activeStep } = this.state;
        let isValid = true;
        if(activeStep == 0 || activeStep == 1){
            isValid = this.validation(activeStep);
        }
        if(isValid){
            this.setState({
            activeStep: activeStep + 1,
            });
        }
      };
    
      validation = (activeStep) => {
        let isValid = true;
        if(activeStep == 0){
            let userData = this.state.userData;
            let isError = false;
            if(userData != null){
                isError = userData.isError;
            }
            if(isError){
                isValid = false;
                // userData.isError = false;
                this.setState({ errorText: 'Must have to fill all field(s) properly.' });
            } else {
                if(userData != null && userData.fName.length > 0 && userData.lName.length > 0 && userData.email.length > 0 && userData.phone.length > 0 && userData.password.length > 0 && userData.confirmPassword.length > 0 ) {
                    isValid = true;
                } else {
                    isValid = false;
                    this.setState({ errorText: 'Must have to fill all mandatory field(s)' });
                }
            }
        } else if(activeStep == 1){
            let addData = this.state.addData;
            if(addData != null){
                if(addData.addLine1.length > 0 && addData.city.length > 0 && addData.st.length > 0 && addData.zip.length > 0 && addData.country.length > 0) {
                    isValid = true;
                } else {
                    isValid = false;
                    this.setState({ errorText: 'Must have to fill all mandatory field(s)' });
                } 
            } else{
                isValid = false;
                this.setState({ errorText: 'Must have to fill all mandatory field(s)' });
            }
        }
        return isValid;
      }

      handleBack = () => {
        const { activeStep } = this.state;
        this.setState({
          activeStep: activeStep - 1,
        });
      };
    
      handleReset = () => {
        this.setState({
          activeStep: 0,
        });
      };
    
      saveData = () => {
        let userData = this.state.userData;
        let addData = this.state.addData;
        let user = this.props.user;
        let params = {};
        let id = user !== null && user !== undefined && user.length > 0 ? user.length + 1 : 1;
        params.id = id;
        params.fname = userData.fName;
        params.lname = userData.lName;
        params.email = userData.email;
        params.phone = userData.phone;
        params.password = userData.password;

        params.addline1 = addData.addLine1;
        params.addline2 = addData.addLine2;
        params.city = addData.city;
        params.state = addData.st;
        params.zip = addData.zip;
        params.country = addData.country;
        this.props.createUser( params );
        history.push('/success');
      }
    
      render() {
        const { classes } = this.props;
        const steps = getSteps();
        const { activeStep } = this.state;
        
        let buttonColor = this.state.errorText != '' ? 'secondary' : 'primary';

        return (
          <div className={classes.root} style={{ width: '100%' }}>
            <Stepper activeStep={activeStep} style={{ width: '100%', marginBottom: '-16px' }}>
              {steps.map((label, index) => {
                const props = {};
                const labelProps = {};
                
                return (
                  <Step key={label} {...props}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            <div>
              {activeStep === steps.length ? (
                <div>
                    {this.saveData()}
                    {/* <Link to='./success' /> */}
                    
                  {/* <Typography className={classes.instructions}> */}
                    {/* <SuccessPage /> */}
                  {/* </Typography> */}
                  {/* <Button onClick={this.handleReset} className={classes.button}> */}
                    {/* Reset */}
                  {/* </Button> */}
                </div>
              ) : (
                <div>
                    <hr />
                  <Typography className={classes.instructions}>{this.getStepContent(activeStep)}</Typography>
                  {this.state.errorText != '' &&
                    <div style={{ color: 'red', fontSize: 14, paddingLeft: '4%', marginTop: '-37px' }}>{this.state.errorText}</div>
                }
                  <hr />
                  <div style={{ paddingLeft: '4%' }}>
                    <Button
                      disabled={activeStep === 0}
                      variant="contained"
                      color="primary"
                      onClick={this.handleBack}
                      className={classes.button}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color={buttonColor}
                      onClick={this.handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      }

}

let mapStateToProps = (state) => {
    return {
      user: state.user,
    };
};


export default connect(mapStateToProps, { createUser }) (withStyles(styles) (Register));
