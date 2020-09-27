import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Ligin from './components/Login';
import history from './history';
import Register from './components/Register';
import SuccessPage from './components/SuccessPage';
import { connect } from 'react-redux';
import { getUsers } from './actions';
import UserPage from './components/UserPage';

class App extends Component {
  constructor(props) {
    super(props);
    props.getUsers();
    this.state = {
      isUser: false,
      data: null,
    }
  }

  // checkUser = (isUser) => {
  //   this.setState({ isUser: isUser });
  // }

  userData = (data) => {
    this.setState({ data: data.data, isUser: data.isUser });
  }

  render() {
    let userData = history;
    // if(Object.values(history.location.state) != undefined && history != null){
    //   if(history.hasOwnProperty('location')){
    //   let location = Object.values(history.location) || null;
    //   if(location != undefined && location != null){
    //     if(location.hasOwnProperty('state')){
        // userData = Object.values(history.location.state);
    //     }
    //   }}
    // }
    return (
      <Router history={history} >
          <Header isUser={this.state.isUser} data={this.state.data} />
          {/* <Header /> */}
          <div className="contents">
            <Switch>
              <Route path='/' exact render={() => (<React.Fragment>
                  <Ligin  />
                  {/* <Ligin /> */}
              </React.Fragment>)} />
              <Route path='/register' exact render={() => (<React.Fragment>
                  <Register />
              </React.Fragment>)} />
              <Route path='/success' exact render={() => (<React.Fragment>
                  <SuccessPage />
              </React.Fragment>)} />
              <Route path='/userPage' exact render={() => (<React.Fragment>
                  <UserPage data={userData} />
              </React.Fragment>)} />
            </Switch>
          </div>
          <Footer />
        </Router>
    );
  }
}

let mapStateToProps = (state) => ({
  users: state.users,

});

export default connect(mapStateToProps, { getUsers })(App);
