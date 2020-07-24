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
            <input type="text" name="first-name" placeholder="First Name">
            <div class="error" id="first-name-error"></div>
        </div>
        <div class="input-wrapper">
            <input type="text" name="last-name" placeholder="Last Name">
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
        <input type="password" name="confirm-password" placeholder="Confirm Password">
        <div class="error" id="confirm-password-error"></div>
    </div>
    <div class="form-action">
        <span id="redirect-to-login">
            Already have an account? Log in
        </span>
        <button class="btn" type="submit">Register</button>
    </div>

</form>    
</div>
</div>`