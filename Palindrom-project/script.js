const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");



function emptyText(){
    if(textInput.value ==="" ||textInput.value === " "){
        alert("Please Input a value!");
        return true;
    }
    return false;
};
function palindromeChecker(){
    if(emptyText()){
        return;
    }
    const inputText = textInput.value.toLowerCase().replace(/[^a-z0-9]/g, "");;
    const reversedText = inputText.split('').reverse().join('');
        if(reversedText === inputText){
            resultDiv.innerHTML = `<p class="answer">${textInput.value} is a palindrome</p>`;
        }else{
            resultDiv.innerHTML =`<p class="answer">${textInput.value}  is not a palindrome</p>`;
        }
};
checkBtn.addEventListener("click",palindromeChecker);