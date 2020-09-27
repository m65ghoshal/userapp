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

class AdditionalForm extends Component {
    constructor(props){
        super(props);
        this.state ={
            addLine1: '',
            addLine2: '',
            city: '',
            st: '',
            zip: '',
            country: '',
            errorEmail: false,
            errorPassword: false,
        }
    }

    componentDidMount(){
        let _state = this.state;
        if(this.props.addData != null){
            _state = this.props.addData;    
        }
        this.setState({ _state })
    }

    handleChange = name => event => {
        let _state = this.state;
        if(this.props.addData != null || this.props.addData != undefined){
            _state = this.props.addData;
        }
        _state[name] = event.target.value;
        this.setState({ _state });
        this.props.additionalData(_state);
    };

    render() {
        const { classes } = this.props;
        let _state = this.state;
        if(this.props.addData != null || this.props.addData != undefined){
            _state = this.props.addData;
        }

        return (
            <div className="formContainer" style={{ width: '65%', marginLeft: '5%', marginTop: '-25px', marginBottom: 20 }}>
                <form className={classes.container} noValidate autoComplete="off">
                    <div>
                    <TextField
                        required
                        placeholder="Address Line1"
                        id="addLine1"
                        label="Address Line1"
                        className={classes.textField}
                        type="text"
                        value={_state.addLine1}
                        onChange={this.handleChange('addLine1')}
                        margin="normal"
                        // helperText={"Some important text"}
                        // fullWidth
                        style={{ width: '300px', marginLeft: 15, marginRight: 15 }}
                    />
                    <TextField
                        placeholder="Address Line2"
                        id="addLine2"
                        label="Address Line2"
                        className={classes.textField}
                        type="text"
                        value={_state.addLine2}
                        onChange={this.handleChange('addLine2')}
                        margin="normal"
                        // helperText={"Some important text"}
                        // fullWidth
                        style={{ width: '300px', marginLeft: 15, marginRight: 15 }}
                    />
                    </div>
                    <div>
                    <TextField
                        required
                        placeholder="City"
                        id="city"
                        label="City"
                        className={classes.textField}
                        type="text"
                        value={_state.city}
                        onChange={this.handleChange('city')}
                        margin="normal"
                        // helperText={"Some important text"}
                        // fullWidth
                        style={{ width: '300px', marginLeft: 15, marginRight: 15 }}
                    />
                    <TextField
                        required
                        placeholder="State"
                        id="st"
                        label="State"
                        className={classes.textField}
                        type="text"
                        value={_state.st}
                        onChange={this.handleChange('st')}
                        margin="normal"
                        // helperText={"Some important text"}
                        // fullWidth
                        style={{ width: '300px', marginLeft: 15, marginRight: 15 }}
                    />
                    </div>
                    <div>
                    <TextField
                        required
                        error={this.state.errorPassword}
                        placeholder="Zip"
                        id="zip"
                        label="Zip"
                        className={classes.textField}
                        type="text"
                        value={_state.zip}
                        onChange={this.handleChange('zip')}
                        margin="normal"
                        // helperText={"Some important text"}
                        // fullWidth
                        style={{ width: '300px', marginLeft: 15, marginRight: 15 }}
                    />
                    <TextField
                        required
                        error={this.state.errorPassword}
                        placeholder="Country"
                        id="country"
                        label="Country"
                        className={classes.textField}
                        type="text"
                        value={_state.country}
                        onChange={this.handleChange('country')}
                        margin="normal"
                        // helperText={"Some important text"}
                        // fullWidth
                        style={{ width: '300px', marginLeft: 15, marginRight: 15 }}
                    />
                    </div>
                </form>
            </div>
        );
    }
}


AdditionalForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles) (AdditionalForm);
