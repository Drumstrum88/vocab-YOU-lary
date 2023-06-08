import domBuilder from '../components/domBuild';
import navBar from '../components/navbar';
import navigationEvents from '../components/events/navigationEvents';
import domEvents from '../components/events/domEvents';
import formEvents from '../components/events/formEvents';
import { showVocabCard } from '../pages/vocabWords';
import { getVocab } from '../api/vocabData';

const startApp = (user) => {
  domBuilder(user);
  domEvents(user);
  formEvents(user);
  navBar();
  showVocabCard(user);

  getVocab(user.uid)
    .then((vocabEntries) => {
      showVocabCard(vocabEntries); // Render the vocab cards based on fetched data
    })
    .catch((error) => {
      console.error('Error fetching vocab entries:', error);
      showVocabCard([]);
    });
  navigationEvents(user);
};

startApp();

export default startApp;
