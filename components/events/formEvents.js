import { showVocabCard } from '../../pages/vocabWords';
import { createVocab, updateVocab } from '../../api/vocabData';
import showVocabForm from '../forms/vocabEntryForm';

const formEvents = () => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('#submit')) {
      e.preventDefault();
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        firebaseKey: document.querySelector('#firebaseKey').value,
        uid: document.querySelector('#uid').value
      };
      if (payload.firebaseKey === '') {
        createVocab(payload).then((vocabArray) => showVocabCard(vocabArray));
      } else {
        updateVocab(payload).then((vocabArray) => showVocabCard(vocabArray));
      }
    }
    if (e.target.id.includes('edit-vocab-btn')) {
      console.warn('CLICKED EDIT VOCAB', e.target.id);
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        firebaseKey: document.querySelector('#firebaseKey').value,
        uid: document.querySelector('#uid').value
      };
      updateVocab(payload).then((vocabArray) => showVocabCard(vocabArray));
    }
    if (e.target.id.includes('add-entry-btn')) {
      showVocabForm();
    }
  });
};

export default formEvents;
