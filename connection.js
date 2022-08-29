document.writeln("<script type='text/javascript' src='data_grab.js'></script>");
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
    return updated_styling;

    //Daniel's attempt to set the background color
    document.getElementById("background").className = svg_color;
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


