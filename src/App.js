import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from "./pages/homepage/homepage.component"
import ShopPage from './pages/homepage/shop/shop.component';
import Header from "./components/header/header-component"
import SignInandSignUpPage from './pages/homepage/signin-and-signup/signin-and-signup-component';
import {auth} from './firebase/firebase.utils'





class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser:null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
  this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
    this.setState({currentUser: user});
    console.log(user)
  });
}
componentWillUnmount(){
  this.unsubscribeFromAuth();
}
  render(){
  return (
    <div>
      <Header currentUser={this.state.currentUser} />
<Switch>
   <Route exact path='/' component ={HomePage} />
   <Route path='/shop' component ={ShopPage} />
   <Route path='/signin' component ={SignInandSignUpPage} />

</Switch>
    </div>

);
}
}
export default App;
