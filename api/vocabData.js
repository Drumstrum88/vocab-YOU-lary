import { showVocabCard } from '../pages/vocabWords';
import client from '../utils/client';

const endpoint = client.databaseURL;
// Get Vocab data
const getVocab = (uid) => new Promise((resolve, reject) => {
  const encodedUid = encodeURIComponent(uid);
  fetch(`${endpoint}/entries.json?orderBy="uid"&equalTo="${encodedUid}"`, {
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

const userID = '-MiBt86VzkC-EGmJnxjm';
getVocab(userID)
  .then((vocabEntries) => {
    console.warn(vocabEntries);

    const vocabContainer = document.querySelector('#vocab-container');
    vocabContainer.innerHTML = '';

    vocabEntries.forEach((entryObj) => {
      vocabContainer.innerHTML += `<div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${entryObj.title}</h5>
        <p class="card-text">${entryObj.definition}</p>
        <button class="btn btn-danger" id="delete-vocab-btn--${entryObj.firebaseKey}">Delete</button>
        <button class="btn btn-info" id="edit-vocab-btn--${entryObj.firebaseKey}">Edit</button>
      </div>
    </div>`;
    });
  });

const fetchAndRenderVocabCards = (uid) => {
  getVocab(uid)
    .then((vocabEntries) => {
      showVocabCard(vocabEntries);
    })
    .catch((error) => {
      console.error('Error fetching vocab data:', error);
    });
};

// Create Vocab data
const createVocab = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/entries.json`, {
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
  fetch(`${endpoint}/entries/${firebaseKey}.json`, {
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
  fetch(`${endpoint}/entries/${vocabObj.firebaseKey}.json`, {
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
