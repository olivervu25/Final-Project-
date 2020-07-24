const controller = {}
controller.register = (data) => {
    if (data.firstName.trim() === ''){
       document.getElementById('first-name-error').innerText = 'Please input your first name'
    } else {
        document.getElementById('first-name-error').innerText = ''
    }
    if (data.lastName.trim() === ''){
        document.getElementById('last-name-error').innerText = 'Please input your last name'
    } else {
        document.getElementById('last-name-error').innerText = ''
    }
    if (data.email.trim() === ''){
        document.getElementById('email-error').innerText = 'Please input your email'
    } else {
        document.getElementById('email-error').innerText = ''
    }
    if (data.password === ''){
        document.getElementById('password-error').innerText = 'Please input your password'
    } else {
        document.getElementById('password-error').innerText = ''
    }
    if (data.confirmPassword === ''){
        document.getElementById('confirm-password-error').innerText = 'Please confirm your password'
    } else if (data.password !== data.confirmPassword){
        document.getElementById('confirm-password-error').innerText = 'Password did not match'
    } 
    else {
        document.getElementById('confirm-password-error').innerText = ''
    } 
    if (data.firstName !=='' && 
        data.lastName !=='' && 
        data.email !=='' && 
        data.password !== '' && 
        data.confirmPassword !== '' &&
        data.password != '' && 
        data.password === data.confirmPassword
    ){
        model.register(data)
    }
}
controller.login = (data) => {
    if (data.email.trim()===''){
        document.getElementById('email-error').innerText = 'Please input your email'
    } else {
        document.getElementById('email-error').innerText = ''
    }
    if (data.password ===''){
        document.getElementById('password-error').innerText = 'Please input your email'
    } else {
        document.getElementById('password-error').innerText = ''
    }
    if (data.email !== ''&&
        data.password != '') {
            model.login(data)
        }
}