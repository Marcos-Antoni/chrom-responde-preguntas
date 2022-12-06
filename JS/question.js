//components
const info = document.querySelector("#info");
const question = document.querySelector("#question");
const formQuestion = document.querySelector("#form-question");
const containerResponse = document.querySelector("#container-response");

//functions
const resQuestion = async () => {
  const questionValue = question.value;
  const infoValue = info.value;
  const key = localStorage.getItem("key");
  const url = `https://api.openai.com/v1/completions`;

  const data = {
    prompt: `Esta es una IA llamada Bot-On, capas de responder preguntas y conversar con el Humano sobre cualquier tema que haya.
    Tema: ${infoValue}
    Human: ${questionValue}
    Bot-On:`,

    model: "text-davinci-003",
    temperature: 0.9,
    max_tokens: 150,
    top_p: 1,
    frequency_penalty: 0.0,
    presence_penalty: 0.6,
    stop: [" Human:", " Bot-On:"],
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${key}`,
    },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();
    const answer = json.choices[0].text;

    return answer;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const createResponse = (answer) => {
  const p = document.createElement("p");
  p.innerHTML = `<b>Tu:</b> ${question.value}<br><b>Bot-On:</b> ${
    answer || "Tu Key no es valida"
  }`;
  containerResponse.appendChild(p);
  question.value = "";
};

//events
formQuestion.addEventListener("submit", async (e) => {
  e.preventDefault();
  const res = await resQuestion();

  createResponse(res);
});
