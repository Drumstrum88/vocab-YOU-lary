import loginButton from '../components/loginButton';

const loginPage = () => {
  document.querySelector('#app').innerHTML = `
  <div id="loginPage">
<h1>Vocab - YOU - lary!</h1>
<div id="login-form-container"></div>
<div id="vocab-container"></div>
<div id="form-container"></div>
<div id="auth"></div>
</div>
`;

  loginButton();
};

export default loginPage;
