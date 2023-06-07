import domBuilder from '../components/domBuild';
import navBar from '../components/navbar';
import navigationEvents from '../components/events/navigationEvents';
import domEvents from '../components/events/domEvents';
import formEvents from '../components/events/formEvents';
import { showVocabCard } from '../pages/vocabWords';
// import { showVocabCard } from '../pages/vocabWords';
// import { getVocab } from '../api/vocabData';
// import fetchAndRenderVocabCards from './vocabService';

const startApp = (user) => {
  domBuilder(user);
  domEvents(user);
  formEvents(user);
  navBar();
  showVocabCard(user.uid);

  // getVocab(user.uid)
  //   .then((vocabEntries) => {
  //     showVocabCard(vocabEntries); // Render the vocab cards based on fetched data
  //   })
  //   .catch((error) => {
  //     console.error('Error fetching vocab entries:', error);
  //     showVocabCard([]); // Render the "No Vocab Entries" message in case of an error
  //  fetchAndRenderVocabCards(user.uid);

  navigationEvents(user);
};

export default startApp;
