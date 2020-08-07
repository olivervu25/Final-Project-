const view = {}
view.setActiveScreen = (screenName) => {
    switch (screenName){
        case 'welcomeScreen':
            document.getElementById('app').innerHTML = components.welcomeScreen
        break;
        case 'loginScreen':
            document.getElementById('app').innerHTML = components.loginScreen

             const loginForm = document.getElementById('login-form')
             loginForm.addEventListener('submit',(event)=> {
                 event.preventDefault()
                 loginForm.email.value = loginForm.email.value.trim() 
                 const data = {
                     email: loginForm.email.value,
                     password: loginForm.password.value
                 }
                 console.log(data)
                 controller.login(data)
            })

        break;
        
        case 'registerScreen':
            document.getElementById('app').innerHTML = components.registerScreen
        const registerForm = document.getElementById('register-form')
        registerForm.addEventListener('submit',(event) => {
            event.preventDefault()
            const data = {
                firstName: registerForm.firstName.value,
                lastName: registerForm.lastName.value, 
                email: registerForm.email.value, 
                password: registerForm.password.value, 
                confirmPassword: registerForm.confirmPassword.value
            }
            console.log(data)
            controller.register(data)
        })
        break;

        case 'introScreen': 
            document.getElementById('app').innerHTML = components.introScreen(model.currentUser.displayName)
        break;

        case 'chatScreen':
            // document.getElementById('app').innerHTML = components.chatScreen(model.currentUser.displayName)
            document.getElementById('app').innerHTML = components.chatScreen
            const sendMessageForm = document.getElementById('send-message-form')
            // const listMessages =  view.getCurrentMessage();
            // listMessages.then((response)=> {
            //     for (let i=0; i<response.length;i++){
            //         view.addMessage(response[i])
            //     }
            // })
            model.loadConversations()     
            model.listenConversationsChange()           
            sendMessageForm.addEventListener('submit', (e) => {
                e.preventDefault()
                const message = {
                    content: sendMessageForm.message.value.trim(),
                    owner: model.currentUser.email,
                    creatAt: new Date().toISOString()
                }
                
                // view.addMessage(message)
                model.addMessage(message)
                view.scrollToEndElement()
                sendMessageForm.message.value=''
            })
        break;

    }

}
view.addMessage = (message) => {
    const messageWrapper = document.createElement('div')
    messageWrapper.classList.add('message-container')
    if (message.owner === model.currentUser.email){
        if (message.content!== '')
        {messageWrapper.classList.add('mine')
        messageWrapper.innerHTML = `
        <div class="content">
        ${message.content}
        </div>`}
    } else {
        if (message.content !==''){
            messageWrapper.classList.add('their')
        messageWrapper.innerHTML = `
        <div class="owner">
        ${message.owner}
        </div>
        <div class ="content">
        ${message.content}
        </div>`
    }}
    document.querySelector('.list-messages').appendChild(messageWrapper)

}

// view.getCurrentMessage = async () => {
//     const messages = await firebaseConfig.firestore().collection('conversations').get();
//     const listMessages = messages.docs[0].data().messages; 
//     return listMessages
// }

view.showCurrentConversation = () => { 
    //đổi tên cuộc trò chuyện 
    document.getElementsByClassName('conversation-header')[0].innerText = model.currentConversation.title
    for (message of model.currentConversation.messages){
        view.addMessage(message)
    }
    view.scrollToEndElement()

}

view.scrollToEndElement = () => { 
    const element = document.querySelector('.list-messages')
    element.scrollTop = element.scrollHeight 
}