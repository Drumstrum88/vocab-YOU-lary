import renderToDom from '../../utils/renderToDom';

const ShowVocabForm = () => {
  const domString = `
    <form id="add-entry-form" class="mb-4">
      <div class="form-group">
        <label for="title">Vocab Term</label>
        <input type="text" class="form-control" id="title" aria-describedby="vocabTitle" placeholder="Enter Vocab Term" required>
      </div>
      <div class="form-group">
        <label for="definition">Definition</label>
        <input type="text" class="form-control" id="definition" placeholder="Enter Definition" required>
      </div>
      <div class="form-group">
        <label for="language">Language</label>
        <input type="text" class="form-control" id="language" placeholder="Enter Language" required>
      </div>
      <button id="submit" class="btn btn-primary mr-2">Submit Entry</button>
      <div class="form-group">`;
  renderToDom('#form-container', domString);
};

export default ShowVocabForm;
