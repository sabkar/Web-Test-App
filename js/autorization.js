import User from './userData.js'

export const UserA = User;

export const handleAutorizeWindow = () => {
  const loginWindow = document.querySelector(".login-window");
  const overlay = document.querySelector(".overlay");
  const signinBtn = document.querySelector(".signin-btn");

  const btnLoginButton = document.querySelector(".login-window__btn-submit");
  const inputName = document.querySelector("#login-window__input-name");
  const inputGroup = document.querySelector("#login-window__input-group");

  const openSignInWindow = () => {
    loginWindow.classList.remove("hide");
    overlay.classList.remove("hide");
  }

  const closeSignInWindow = () => {
    loginWindow.classList.add("hide");
    overlay.classList.add("hide");
  }

  const login = (event) => {
    event.preventDefault();
    let name = inputName.value;
    let group = inputGroup.value;
    User.name = name;
    User.group = group;
    closeSignInWindow();
    location.reload();
  }

  signinBtn.addEventListener("click", openSignInWindow);
  overlay.addEventListener("click", closeSignInWindow);
  btnLoginButton.addEventListener("click", login);
}

export const handleUserWindow = () => {
  document.querySelector('.user').textContent = User.toString();
}