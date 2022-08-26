document.writeln("<script type='text/javascript' src='data_grab.js'></script>");

function color_pref(x) {
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
    
    let updated_styling = document.getElementById('.'+svg_color.toString()).className;
    return 

}

const svg_color = color_pref(x);
const ___ = background_color(svg_color);