
import React from 'react';
import  { Link } from 'react-router-dom';


class Header extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return(
            <>
            <header className = "header">
                <div className = "container flex center space-between">
                <strong>Blog-App</strong>
                
            <ul className = "flex header-nav">
            
            <Link
                  className='btn btn-sec'
                  to='/'
                  activeClassName='active'
                >
                Home
                </Link>
            
              
                   <Link
                   className='btn btn-sec'
                   to='/login'
                   activeClassName='active'
                 >
                 Login
                 </Link>

            
           
                  <Link
                  className='btn btn-sec'
                  to='/signup'
                  activeClassName='active'

               > Signup
                </Link>
                
             
            </ul>
            </div>
            </header>
            </>
        )
    }
}


export default Header;