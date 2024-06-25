const result = document.getElementById("results-div");
const clear = document.getElementById("clear-btn");
const check = document.getElementById("check-btn");
const user = document.getElementById("user-input");

const regexChecker = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}[\s-]?\d{4}$/;

window.onload = () => {
  // Fonction range pour générer une gamme de nombres
  const range = (start, end) => Array(end - start + 1).fill(start).map((element, index) => element + index);

  // Sélectionne l'élément parent où les boutons seront ajoutés
  const container = document.getElementById("numpad");

  // Vérifie que l'élément parent existe
  if (!container) {
    console.error('Element with id "numpad" not found');
    return;
  }

  // Crée et ajoute les boutons
  range(1, 9).forEach(number => {
    const button = document.createElement("button");
    button.innerHTML = number;
    button.classList.add("btn");
    button.classList.add("btn-primary");
    button.classList.add(`btn-number-${number}`);
    container.appendChild(button);
  });
};

const emptyString = () => {
  return user.value === "" ? (alert("Please provide a phone number"), false) : true;
};

const checkString = () => {
  if(user.value.match(regexChecker)){
    result.textContent = `Valid US number: ${user.value}`;
    result.style.color = "black";
    return;
  }else{
    result.textContent = `Invalid US number: ${user.value}`;
    result.style.color = "black";
    return;
  }
};
const clearBtn = () => {
  result.textContent = "";
  user.value = "";
};

check.addEventListener("click",()=> {
  if(emptyString()){
    checkString();
  }
})
clear.addEventListener("click",clearBtn);