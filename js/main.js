const textInput = document.querySelector(".app > textarea");
const lowerCaseBtn = document.querySelector(".lowCase");
const upperCaseBtn = document.querySelector(".upCase");
const sentenceCaseBtn = document.querySelector(".sentCase");
const capitalizedCaseBtn = document.querySelector(".capCase");
const alternateCaseBtn = document.querySelector(".altCase");
const reverseCaseBtn = document.querySelector(".revCase");
const copyBtn = document.querySelector(".copy");

lowerCaseBtn.onclick = function() {
    textInput.value = textInput.value.toLowerCase();
}

upperCaseBtn.onclick = function() {
    textInput.value = textInput.value.toUpperCase();
}

sentenceCaseBtn.onclick = function() {
    textInput.value = textInput.value.toLowerCase();
    textInput.value = textInput.value.replace(textInput.value.charAt(0), textInput.value.charAt(0).toUpperCase());
}

capitalizedCaseBtn.onclick = function() {
    textInput.value = textInput.value.toLowerCase();
    let space = false;
    for(let i = 0; i < textInput.value.length; i++) {
        if(textInput.value.charAt(i) == " ") {
            space = true;
        }
    }
    if(space) {
        const arr = textInput.value.split(" ");
        const convert = arr.map(item => item.replace(item.charAt(0), item.charAt(0).toUpperCase()));
        textInput.value = convert.join(" ");
    } else {
        textInput.value = textInput.value.replace(textInput.value.charAt(0), textInput.value.charAt(0).toUpperCase());
    }
}

alternateCaseBtn.onclick = function() {
    textInput.value = textInput.value.toLowerCase()
    const letters = textInput.value.split("");
    for(let i = 1; i < letters.length; i += 2) {
        letters[i] = letters[i].toUpperCase();
    }
    textInput.value = letters.join("");
}

reverseCaseBtn.onclick = function() {
    textInput.value = textInput.value.toLowerCase()
    const letters = textInput.value.split("");
    for(let i = 0; i < letters.length; i += 2) {
        letters[i] = letters[i].toUpperCase();
    }
    textInput.value = letters.join("");
}

copyBtn.onclick = function() {
    const copyText = textInput;
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Text copied");
}