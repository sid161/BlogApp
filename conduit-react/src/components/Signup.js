
import React from 'react';
import '../styles/Login.css'
import { signupURL } from '../utils/constant';
//  import {Route} from 'react-router-dom'
import {withRouter} from 'react-router-dom'

class Signup extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email:"",
            username:"",
            password:"",
            errors:{
                email:"",
                username:"",
                password:""
            }
        }
    }

    handlesubmit(event){
        event.preventDefault();
        const { username, email,password} = this.state
        fetch(signupURL, {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({use:{username,email,password}})
        }).then((res) => {
            if(!res.ok){
                res.json().then(({errors}) => this.setState({errors}))
            }
            return res.json()
        }).then( ({user}) => {
            this.props.updateUser(user)
            this.setState({username:"",password:"",email:""})
            this.props.history.push('/')
        }
        )
    }

    handleChange(event){
        var { name ,value} = event.target;
        let errors = [...this.state.errors];
        switch(name){
            
        }

        this.setState({
            [name]:value
        })
    }
    render(){
        return(
            <>
             
            <main>
            <section className= "login-sec">
                <h2 className = "sec-heading">SignUp</h2>
                <div className = "container">
                    <form onSubmit = {this.handleSubmit}>
                    <fieldset>
                            <label>Enter Email</label>
                            <input type = "email" name = "email"onChange = {this.handleChange} id = "loginEmail" value = "sid1610@gmail.com"/>
                            </fieldset>
                            <fieldset>
                            <label>Enter Username</label>
                            <input type = "username" name = "username" onChange = {this.handleChange} id = "loginUsername" value = "123456"/>
                            </fieldset>
                            <fieldset>
                            <label>Enter Password</label>
                            <input type = "password" name = "password" onChange = {this.handleChange} id = "loginPassword" value = "123456"/>
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

export default withRouter(Signup);