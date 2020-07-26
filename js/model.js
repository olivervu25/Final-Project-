const model = {}
model.currentUser = undefined
model.register = (data) => {
    firebase.auth()
    .createUserWithEmailAndPassword(data.email,data.password)
    .then((res)=>{
        firebase.auth().currentUser.updateProfile({
            displayName: data.firstName + ' ' + data.lastName
        })
        firebase.auth().currentUser.sendEmailVerification()
        alert('The email has been registered, please check your email')
        view.setActiveScreen('loginScreen')
    }).catch((err)=> {
        console.log(err)
        alert(err.message)
    })
}
model.login = async (data) => {
    try {
    const response = await firebase.auth().signInWithEmailAndPassword(data.email,data.password)
    console.log(response)
    if (response.user.emailVerified === false) {
        document.getElementById('email-error').innerText = 'Please verify your email first!'
    }
    else {
        model.currentUser = {
            displayName: response.user.displayName,
            email: response.user.email
        }
        view.setActiveScreen('chatScreen')
    }
    } catch(err) {
        if (err.code === 'auth/user-not-found' || err.code === 'auth/invalid-email'){
            document.getElementById('email-error').innerText = 'This e-mail address has not been registered'
        }
        if (err.code === 'auth/wrong-password'){
            document.getElementById('password-error').innerText = 'You have entered an invalid password '
        }
    }
}
