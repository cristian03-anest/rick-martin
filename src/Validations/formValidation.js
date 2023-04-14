const formValidation = (data) => {
    let email = ''
    let password = ''
    
    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email))
        email = 'I’m afraid that’s not quite right.'
    
    if(!/\d/.test(data.password) || data.password.length > 10 || data.password.length  < 6) 
        password = "Actually, I don't think..."   

    return { email, password }
}

export default formValidation