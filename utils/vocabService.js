import { showVocabCard } from '../pages/vocabWords';
import { getVocab } from '../api/vocabData';

const fetchAndRenderVocabCards = () => {
  getVocab()
    .then((vocabEntries) => {
      showVocabCard(vocabEntries);
    })
    .catch((error) => {
      console.error('Error fetching vocab data:', error);
    });
};

export default fetchAndRenderVocabCards;
