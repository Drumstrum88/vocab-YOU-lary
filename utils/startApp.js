import domBuilder from '../components/domBuild';
import navBar from '../components/navbar';
import navigationEvents from '../components/events/navigationEvents';
import domEvents from '../components/events/domEvents';
import formEvents from '../components/events/formEvents';
import { showVocabCard } from '../pages/vocabWords';
import { getVocab } from '../api/vocabData';
import fetchAndRenderVocabCards from './vocabService';

const startApp = (user) => {
  domBuilder(user);
  domEvents(user);
  formEvents(user);
  navBar();
  fetchAndRenderVocabCards();
  navigationEvents(user);

  getVocab(user.uid).then((words) => showVocabCard(words));
};

export default startApp;
