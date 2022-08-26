// JS adapted from here: https://www.learnwithjason.dev/blog/get-form-values-as-json

// let clock_pref = 'empty';
var cp = 'empty';
console.log(cp);
// console.log(clock_pref);

function handleFormSubmit(event) {
  // Function definition: Handles the submitted form by saving all entries into
  // a JSON object.User's color preference is extracted from the JSON object and 
  // saved into the variable color_pref. Results are then displayed on the webpage

  // Clears the users data
  event.preventDefault();
  
  const data = new FormData(event.target);
  
  const formJSON = Object.fromEntries(data.entries());
  
  // Saving the preferences of users which is grabbed from the json Object. Type is string
  var color_pref = formJSON['color'];
  // clock_pref = formJSON['clock'];

  // Checking this saved value
  console.log(color_pref);
  // console.log(clock_pref);



  const results = document.querySelector('.results pre');
  results.innerText = JSON.stringify(formJSON, 2);

  
  
}

// Gathers data in the form and puts it into a constant. Second line calls the above function
const form = document.querySelector('.form');
form.addEventListener('submit', handleFormSubmit);



// console.log(color_pref);
// console.log(clock_pref);




// Goals for today
// Grab variables input by users (still working on this)
// Create a function that specifies a user's color preference (example: yellow);
// Given this color preference ^, we want to change the background class of the svg tag located here                                                                               
// After that we want to zip the root folder


