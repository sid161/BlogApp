
import React from 'react';
import  { NavLink } from 'react-router-dom';


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
            
            <NavLink
                  className='btn btn-sec'
                  to='/'
                  activeClassName='active'
                >
                Home
                </NavLink>
            
              
                   <NavLink
                   className='btn btn-sec'
                   to='/login'
                   activeClassName='active'
                 >
                 Login
                 </NavLink>

            
           
                  <NavLink
                  className='btn btn-sec'
                  to='/signup'
                  activeClassName='active'

               > Signup
                </NavLink>
                
             
            </ul>
            </div>
            </header>
            </>
        )
    }
}


export default Header;