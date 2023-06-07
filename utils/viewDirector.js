import firebase from 'firebase/app';
import 'firebase/auth';
import loginButton from '../components/loginButton';
import startApp from './startApp';
import client from './client';
import clearDom from './clearDom';

const ViewDirectorBasedOnUserAuthStatus = () => {
  firebase.initializeApp(client);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // Person is logged in, start the app
      startApp(user);
    } else {
      // Person is NOT logged in
      clearDom();
      clearDom('add-entry-form');
      loginButton();
    }
  });
};

export default ViewDirectorBasedOnUserAuthStatus;
