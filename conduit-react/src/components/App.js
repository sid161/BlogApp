
// import './App.css'
import {Route, BrowserRouter} from 'react-router-dom'
import Switch from 'react-router-dom'
 
 
 import Login from './Login';
 import Header from './Header';
import Home from './Home';
import Signup from './Signup';


function App() {
  return (
      <>
      <BrowserRouter>
       <Header/>
       <Route path = '/'>
         <Home/>
       </Route>
       <Route path = "/login">
         <Login/>
         </Route>
        <Route path = "/signup">
          <Signup/>
        </Route>
        </BrowserRouter>
        

      </>

  );
}

export default App;
