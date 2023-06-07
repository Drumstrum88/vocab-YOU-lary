import { signOut } from '../../utils/auth';
import { showVocabCard } from '../../pages/vocabWords';
import { getVocab } from '../../api/vocabData';
import clearDom from '../../utils/clearDom';

const navigationEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('logout')) {
      signOut();
    }
    if (e.target.id.includes('vocab-link')) {
      getVocab().then((words) => showVocabCard(words));
    }
  });
  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('sign-out')) {
      signOut();
      const navigationElement = document.querySelector('#navigation');
      navigationElement.parentNode.removeChild(navigationElement);
      clearDom('#vocab-container');
    }
  });
};

export default navigationEvents;
