var bold_counter = 0;
var itallic_counter = 0;
var underline_counter = 0;

//*****************************( to make bold )***************************************** */
function bold(){
    var editor = document.getElementById("editor")
   bold_counter =bold_counter+1;
     if(bold_counter % 2 != 0){editor.style.fontWeight = "bold";}
    else if( bold_counter % 2 == 0){ editor.style.fontWeight = "lighter"}
}

//*****************************( to make italic )***************************************** */
function italic(){
    var editor = document.getElementById("editor")
   itallic_counter =itallic_counter+1;
    if(itallic_counter % 2 != 0){editor.style.fontStyle = "italic";}
    else if( itallic_counter % 2 == 0){ editor.style.fontStyle = "normal"}
}

//*****************************( to make underline() )***************************************** */
function underline(){
    var editor = document.getElementById("editor")
    underline_counter =underline_counter+1;
   if(underline_counter % 2 != 0){editor.style.textDecoration = "underline";}
    else if( underline_counter % 2 == 0){ editor.style.textDecoration = "none"}
}
