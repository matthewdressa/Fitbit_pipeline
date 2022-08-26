document.writeln("<script type='text/javascript' src='data_grab.js'></script>");

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

const svg_color = color_pref(x);
const ___ = background_color(svg_color);