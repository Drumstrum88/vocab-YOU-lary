import { showVocabCard } from '../pages/vocabWords';
import client from '../utils/client';

const endpoint = client.databaseURL;
// Get Vocab data
const getVocab = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab.json?orderBy='uid'&equalTo=${uid}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.warn(data);
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const fetchAndRenderVocabCards = () => {
  getVocab()
    .then((vocabArray) => {
      showVocabCard(vocabArray);
    })
    .catch((error) => {
      console.error('Error fetching vocab data:', error);
    });
};

// Create Vocab data
const createVocab = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// Delete Vocab data

const deleteVocab = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const updateVocab = (vocabObj) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab/${vocabObj.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(vocabObj),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

export {

  fetchAndRenderVocabCards,
  getVocab,
  createVocab,
  deleteVocab,
  updateVocab
};
