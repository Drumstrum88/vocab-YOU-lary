import renderToDom from '../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="main-container">
    <div id="login-form-container"></div>
    <div id="vocab-container"></div>
    <div id="form-container"></div>
  </div>
  `;
  renderToDom('#app', domString);
};

export default domBuilder;
