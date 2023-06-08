import { deleteVocab, getVocab } from '../../api/vocabData';
import { showVocabCard } from '../../pages/vocabWords';
import vocabForm from '../forms/vocabEntryForm';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-vocab-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        // console.warn('CLICKED DELETE VOCAB', e.target.id);
        // console.warn(e.target.id.split('--'));
        const [, id] = e.target.id.split('--');
        deleteVocab(id).then((vocabEntries) => showVocabCard(vocabEntries));
      }
    }
    if (e.target.id.includes('edit-vocab-btn')) {
      // console.warn('CLICKED EDIT VOCAB', e.target.id);
      const [, id] = e.target.id.split('--');
      getVocab(id).then((vocabObj) => vocabForm(vocabObj));
    }
  });
};

export default domEvents;
