// JS adapted from here: https://www.learnwithjason.dev/blog/get-form-values-as-json
function handleFormSubmit(event) {
  event.preventDefault();
  
  const data = new FormData(event.target);
  
  const formJSON = Object.fromEntries(data.entries('color'));

  // for multi-selects, we need special handling
  // formJSON.colors = data.getAll('colors');
  // formJSON.color = data.getAll('color');
  // formJSON.snacks = data.getAll('snacks');
  // formJSON.snacks = data.getAll('snacks');
  
  const results = document.querySelector('.results pre');
  results.innerText = JSON.stringify(formJSON);
}

const form = document.querySelector('.contact-form');
form.addEventListener('submit', handleFormSubmit);