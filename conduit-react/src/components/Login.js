import React from 'react';
import '../styles/Login.css'
// import {Route} from 'react-router-dom'
import { loginURL } from '../utils/constant';
import { withRouter} from 'react-router-dom'



class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email:"",
            password:"",
            errors:{
                email:"",
                password:"",
            }

        }
    }
    handleChange (event){
        let {name,value} = event.target
        let errors = [...this.state.error]

        switch(name) {
            case 'email':
            let emailError = 
            value.indexOF('@') === -1 ? 'Email does not contain @ ' : '';
            errors.email = emailError;
            break;
            default:
                return errors;
            
        }

        switch(name){
            case 'password':
            let passwordError;
            if(value.length < 7){
                passwordError = "password should be more than 6 char";
               let reg = /"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]/
               if(!reg.test(value)){
                   passwordError = "password should be more than 6 char"
                   errors.password = passwordError
               }
              
            } 
            break
            default:
                return errors;
            
        }
        this.setState({
            [name]: value,errors
        })
    }
    handleSubmit(event){
        event.preventDefault();
        const {  email,password} = this.state
        fetch(loginURL, {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({use:{email,password}})
        }).then((res) => {
            if(!res.ok){
                res.json().then(({errors}) => this.setState({errors}))
            }
            return res.json()
        }).then( ({user}) => {
            this.props.updateUser(user)
            this.setState({password:"",email:""})
            this.props.history.push('/')
        }
        )
    }




    render(){
        return(
            <>
           
            <main>
                <section className= "login-sec">
                    <h2 className = "sec-heading">Login Page</h2>
                    <div className = "container">
                        <form onSubmit = {this.handleSubmit}>
                            <fieldset>
                            <label>Enter Email</label>
                            <input type = "email" name = "email" id = "loginEmail" onChange = {this.handleChange} value = "sid1610@gmail.com"/>
                            <span className = "error">{this.state.errors.email}</span>
                            </fieldset>
                            <fieldset>
                            <label>Enter Password</label>
                            <input type = "password" name = "password" onChange = {this.handleChange} id = "loginPassword" value = "123456"/>
                            <span className = "error">{this.state.errors.password}</span>
                            </fieldset>
                            <fieldset type = "flex center">
                                <button type = "submit" disabled = {this.state.errors.email || this.state.errors.password} className = "btn btn-ter">Submit</button>

                            </fieldset>
                        </form>
                    </div>
                </section>
            </main>
            </>
        )
    }
}

export default withRouter(Login)