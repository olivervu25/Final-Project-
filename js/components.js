const components = {}
components.welcomeScreen = `
<h1>Welcome to Chat app</h1>

`
components.registerScreen = `   <div class="register-container">
<div class="aside-right">
    <div class="header">
        <h3>MindX chat</h3>
    </div>
<form id="register-form">
    <div class="input-name-wrapper">
        <div class="input-wrapper">
            <input type="text" name="firstName" placeholder="First Name">
            <div class="error" id="first-name-error"></div>
        </div>
        <div class="input-wrapper">
            <input type="text" name="lastName" placeholder="Last Name">
            <div class="error" id="last-name-error"></div>
        </div>
    </div>
    <div class="input-wrapper">
        <input type="text" name="email" placeholder="Email">
        <div class="error" id="email-error"></div>
    </div>
    <div class="input-wrapper">
        <input type="password" name="password" placeholder="Password">
        <div class="error" id="password-error"></div>
    </div>
    <div class="input-wrapper">
        <input type="password" name="confirmPassword" placeholder="Confirm Password">
        <div class="error" id="confirm-password-error"></div>
    </div>
    <div class="form-action">
        <span id="redirect-to-login" onclick="goToLogin()">
            Already have an account? Log in
        </span>
        <button class="btn" type="submit">Register</button>
    </div>

</form>    
</div>
</div>`

components.loginScreen = `<div class="login-container">
<div class="aside-right">
    <div class="header">
        <h3>Log In</h3>
    </div>
<form id="login-form" action="">
    <div class="input-wrapper">
        <input type="text" name="email" placeholder="Email...">
        <div class="error" id="email-error"></div>
    </div>
    <div class="input-wrapper">
        <input type="password" name="password" placeholder="Password...">
        <div class="error" id="password-error"></div>
    </div>
    <div class="form-action">
    <span id="redirect-to-register" onclick="goToRegister()">Don't have an account yet? Register</span>
        <button class="btn" type="submit">Login</button>
    </div>
</form> 
</div>
</div>

`
components.chatScreen = (a) => {
return (`
<div class="welcome-container">
<div class="welcome-user">
    <h2>Welcome, ${a}! </h2>
</div>
<div class="welcome-slogan">
    <h3>Stay in touch with everyone everywhere!</h3>
    <h5>a good relationship starts from a good conversation or<br> communication so get connected and stay in touch <br> with people you care about.</h5>
</div>
</div>
`)
}
