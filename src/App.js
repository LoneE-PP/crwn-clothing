import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from "./pages/homepage/homepage.component"
import ShopPage from './pages/homepage/shop/shop.component';
import Header from "./components/header/header-component"
import SignInandSignUpPage from './pages/homepage/signin-and-signup/signin-and-signup-component';




function App() {
  return (
    <div>
      <Header />
<Switch>
   <Route exact path='/' component ={HomePage} />
   <Route path='/shop' component ={ShopPage} />
   <Route path='/signin' component ={SignInandSignUpPage} />
</Switch>
    </div>

);
}

export default App;
