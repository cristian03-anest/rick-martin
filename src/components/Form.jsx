import { useState } from "react"
import formValidation from "../Validations/formValidation"


const Form = (props) => {
    let [userData,  setUserData] = useState({
        email: '',
        password: ''        
    })

    let [errorData, setErrorData] = useState({
        email: '',
        password: ''
    })   

    const handleChange = (event) =>{  
             
        setUserData({
            ...userData,
            [event.target.name] : event.target.value
        })     
        setErrorData(formValidation({
            ...userData, 
            [event.target.name]: event.target.value
        }))    
        
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        props.loginAccess(userData)
    }
    console.log(errorData.email || errorData.password)
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email: </label>
            <input onChange={handleChange} type="email" value={userData.email} name='email' />
            {errorData.email && <span>{errorData.email}</span> }
            <hr/>
            <label htmlFor="password">Password:</label>
            <input onChange={handleChange} type="password" value={userData.password} name='password' />
            {errorData.password && <span>{errorData.password}</span> }
            <hr/>
            <button type='submit' disabled={errorData.email || errorData.password}>Send</button>
        </form>        
    )
}

export default Form