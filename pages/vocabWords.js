import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const emptyVocabEntries = () => {
  const domString = '<h1>No Vocab Entries</h1>';
  renderToDom('#vocab-container', domString);
};

const showVocabCard = (array) => {
  console.warn(array);
  clearDom('#vocab-container');
  if (array.length) {
    array.forEach((entry) => {
      console.warn(entry);
      const domString = `
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${entry.title}</h5>
            <p class="card-text">${entry.definition}</p>
            <hr>
            <i id="edit-vocab-btn--${entry.firebaseKey}" class="fas fa-edit btn btn-info"></i>
            <i id="delete-vocab-btn--${entry.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
          </div>
        </div>`;
      renderToDom('#vocab-container', domString);
      console.warn(entry.title);
      console.warn(entry.definition);
    });
  } else {
    renderToDom('#vocab-container', '<h1>No Vocab Entries</h1>');
  }
};

export { showVocabCard, emptyVocabEntries };
