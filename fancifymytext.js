function Bigger(){
    document.getElementById("textbox").style.fontSize = "24pt";
}

function Style(){
    let text = document.getElementById("textbox");
    let fancy = document.getElementById("FancyShmancy");

    if(fancy.checked){
        text.style.fontWeight = "bold";
        text.style.color = "blue";
        text.style.textDecoration = "underline";
    } 
    else{
        text.style.fontWeight = "normal";
        text.style.color = "black";
        text.style.textDecoration = "none";
    }
    
}

function Mooify(){
    let textField = document.getElementById("textbox");
    textField.value = textField.value.toUpperCase();

    var parts = textField.value.split(".");
    parts = parts.join("-Moo.");
    textField.value = parts;

}