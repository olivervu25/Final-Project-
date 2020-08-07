const model = {}
model.currentUser = undefined
model.conversations = undefined 
model.currentConversation = undefined 
model.collectionName = 'conversations'
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
        await firebase.auth().signInWithEmailAndPassword(data.email,data.password)
    console.log(response)
    if (response.user.emailVerified === false) {
        document.getElementById('email-error').innerText = 'Please verify your email first!'
    }
    else {
        model.currentUser = {
            displayName: response.user.displayName,
            email: response.user.email
        }
        view.setActiveScreen('introScreen')
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

model.addMessage = (msg) => {
    const documentIdAddMsg = 'Z1NJH2yrFkwYeuVHJj79'
    const dataAddMsg = {
      messages: firebase.firestore.FieldValue.arrayUnion(msg)
    }
    firebase.firestore()
      .collection('conversations').doc(documentIdAddMsg)
      .update(dataAddMsg)
};

model.loadConversations = async () => {
    const response = await firebase.firestore().collection(model.collectionName).where('users','array-contains',model.currentUser.email).get() 
    model.conversations = getDataFromDocs(response.docs)
    if (model.conversations.length>0) {
        model.currentConversation = model.conversations[0]
        view.showCurrentConversation() 
    }
}
//Thay đổi dữ liệu tại local store cho thống nhất với Firebase 
model.listenConversationsChange = () => {
    let isFirstRun = true
    firebase.firestore().collection(model.collectionName).where('users','array-contains',model.currentUser.email).onSnapshot((res) => {
        if (isFirstRun) {
            isFirstRun = false 
            return 
        }
        const docChanges = res.docChanges()
        for (oneChange of docChanges){
            console.log(oneChange)
            const type = oneChange.type 
            if (type === 'modified'){
                const docData = getDataFromDoc(oneChange.doc)
                console.log(docData)
                for (let index = 0; index<model.conversations.length; index++){
                    if (model.conversations[index].id === docData.id){
                        model.conversations[index] = docData
                    }
                }
                //update model.currentConversation 
                if (docData.id === model.currentConversation.id){
                    model.currentConversation = docData
                    const lastMessage = docData.messages[docData.messages.length - 1]
                    view.addMessage(lastMessage)
                    view.scrollToEndElement()
                }
            }

        }
    }) 
}