import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const emptyVocabEntries = () => {
  const domString = '<h1>No Vocab Entries</h1>';
  renderToDom('#vocab-container', domString);
};

const showVocabCard = (array) => {
  clearDom('#vocab-container');
  if (array.length) {
    array.forEach((item) => {
      const domString = `
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text">${item.definition}</p>
            <hr>
            <i id="edit-vocab-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
            <i id="delete-vocab-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
          </div>
        </div>`;
      renderToDom('#vocab-container', domString);
    });
  } else {
    emptyVocabEntries();
  }
};

export { showVocabCard, emptyVocabEntries };
