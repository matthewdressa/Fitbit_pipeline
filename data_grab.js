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

  return color_pref;
  
}

// Gathers data in the form and puts it into a constant. Second line calls the above function
const form = document.querySelector('.form');
form.addEventListener('submit', handleFormSubmit);


var x = handleFormSubmit();

function color_pref(x) {
        // Def: Compares user color pref to array and returns it

        // TODO: Correct syntax and link this to the submit form
        color_array = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
        for (i in color_array.length){
            if (x.toLowercase() == color_array[i]){
                return x;
            }

            else {
                pass;
            }
        }

}


function background_color(svg_color) {
    // TODO: This needs to be linked to index.view location is here
    // // C:\Users\Matthew\Documents\GitHub\Fitbit_pipeline\Fitbit_pipeline\digital_clock-export\resources\index.view
    
    // The class is updated to match the color passed into parameters
    let updated_styling = document.getElementById('.'+svg_color.toString()).className;
    return 

}

function folder_zip (){
    // TODO: This function should zip the folder root folder after changes have already een made 

}

function zip_download (){
    // TODO: This function should download the function after it has already been zipped
}


const svg_color = color_pref(x);
const ___ = background_color(svg_color);






// Goals
// 1. Grab variables input by users (still working on this)
// 2. Create a function that specifies a user's color preference (example: yellow);
// 3. Given this color preference ^, we want to change the background class of the svg tag located here                                                                               
// 4. After that we want to zip the root folder
// 5. Download zipped folder


