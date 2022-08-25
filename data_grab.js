// JS adapted from here: https://www.learnwithjason.dev/blog/get-form-values-as-json

// let clock_pref = 'empty';
var color_pref = 'empty';

console.log(color_pref);
// console.log(clock_pref);

function handleFormSubmit(event) {
  event.preventDefault();
  
  const data = new FormData(event.target);
  
  const formJSON = Object.fromEntries(data.entries());
  
  // Saving the preferences of users which is grabbed from the json Object. 
  color_pref = formJSON['color'];
  clock_pref = formJSON['clock'];

  console.log(color_pref);
  console.log(clock_pref);



  const results = document.querySelector('.results pre');
  results.innerText = JSON.stringify(formJSON, 2);
  
}

const form = document.querySelector('.contact-form');
form.addEventListener('submit', handleFormSubmit);

console.log(color_pref);
console.log(clock_pref);

// function getVars (clock, color){
//     let clk = clock_pref,
//         clr = color_pref; 

//         return { clk, clr };

// }