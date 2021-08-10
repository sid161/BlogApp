
// import './App.css'
import {Route, BrowserRouter} from 'react-router-dom'
import Switch from 'react-router-dom'
import SinglePost from './SinglePost';
 
 
 import Login from './Login';
 import Header from './Header';
import Home from './Home';
import Signup from './Signup';
import NoMatch from './NoMatch'
import React from 'react';
import { localStorageKey } from '../utils/constant';


class App extends React.component {
  state = {
    isLoggedIn:false,
    user:null
  }

  componentDidMount(){
    let storageKey = localStorageKey[localStorageKey]
    if(key){
      fetch(userVerifyURL, {
        method:"GET",
        headers:{
          "authorisation":`Token ${storageKey}`
        }
    
    
    }).then(res => res.json()).then(({user}) => console.log({user}))
  
  }

  updateUser = (user) => {
    this.setstate({isLoggedIn:true, user})
    localStorage.setItem(localStorageKey,user.token)
  }
  render(){
    return(
      <>
     
      <BrowserRouter>
       <Header isLoggedIn = {this.state.isLoggedIn} user = {this.state.user}/>
       <Route exact path = '/'>
         <Home/>
       </Route>
       <Route exact path = "/login">
         <Login updateUser = {this.updateUser}/>
         </Route>
        <Route exact path = "/signup">
          <Signup updateUser = {this.updateUser}/>
        </Route>
        <Route exact path = "/article/:slug" component = {SinglePost}>
          <singlePost/>
        </Route>
        <Route exact path = "*">
          <NoMatch/>
        </Route>
        </BrowserRouter>
        
      </>
    )

  }
  

    
}

export default App;
