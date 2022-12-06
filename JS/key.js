// key
const inputKey = document.querySelector("#key");
const formKey = document.querySelector("#form-key");

//containers
const containerKey = document.querySelector("#container-key");
const containerQuestion = document.querySelector("#container-question");
const containerEnd = document.querySelector("#container-end");

//btn
const btnEnd = document.querySelector("#btn-end");

//functions
const funKey = () => {
  const key = localStorage.getItem("key");
  if (key) {
    containerKey.style.display = "none";
    containerQuestion.style.display = "block";
    containerEnd.style.display = "block";
  } else {
    containerKey.style.display = "block";
    containerQuestion.style.display = "none";
    containerEnd.style.display = "none";
  }
};

// eventos
formKey.addEventListener("submit", (e) => {
  e.preventDefault();
  const key = inputKey.value;

  localStorage.setItem("key", key);

  funKey();
});

btnEnd.addEventListener("click", () => {
  localStorage.removeItem("key");

  funKey();
});

funKey();
