const textInput = document.getElementById("textInput");

const count = document.getElementById("count");



function countCharacters(){

    let textLength = textInput.value.length;

    count.innerHTML = textLength;

}