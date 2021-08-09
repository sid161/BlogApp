
// import './App.css'
import {Route, BrowserRouter} from 'react-router-dom'
import Switch from 'react-router-dom'
import SinglePost from './SinglePost';
 
 
 import Login from './Login';
 import Header from './Header';
import Home from './Home';
import Signup from './Signup';
import NoMatch from './NoMatch'


function App() {
  return (
      <>
      <BrowserRouter>
       <Header/>
       <Route exact path = '/'>
         <Home/>
       </Route>
       <Route exact path = "/login">
         <Login/>
         </Route>
        <Route exact path = "/signup">
          <Signup/>
        </Route>
        <Route exact path = "/article/:slug" component = {SinglePost}>
          <singlePost/>
        </Route>
        <Route exact path = "*">
          <NoMatch/>
        </Route>
        </BrowserRouter>
        

      </>

  );
}

export default App;
