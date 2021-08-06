import React from 'react';
import '../styles/Login.css'
// import {Route} from 'react-router-dom'


class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return(
            <>
           
            <main>
                <section className= "login-sec">
                    <h2 className = "sec-heading">Login Page</h2>
                    <div className = "container">
                        <form>
                            <fieldset>
                            <label>Enter Email</label>
                            <input type = "email" name = "email" id = "loginEmail" value = "sid1610@gmail.com"/>
                            </fieldset>
                            <fieldset>
                            <label>Enter Password</label>
                            <input type = "password" name = "password" id = "loginPassword" value = "123456"/>
                            </fieldset>
                            <fieldset type = "flex center">
                                <button type = "submit" className = "btn btn-ter">Submit</button>

                            </fieldset>
                        </form>
                    </div>
                </section>
            </main>
            </>
        )
    }
}

export default Login