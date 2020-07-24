const model = {}
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
        alert('Please verify your email first!')
    }
    else {
        view.setActiveScreen('chatScreen')
    }
    } catch(err) {
        console.log(err)
    }
}
