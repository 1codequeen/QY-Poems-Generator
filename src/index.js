function displayPoems(response) {
  console.log("poem generated");
  new Typewriter("#Poems", {
    strings: response.data.answer,
    autoStart: true,
    delay: 75,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsOutput = document.querySelector(".instructions");
  let apiKey = "9435699d6f2a3f2cd6b3e67t0o99669e";
  let prompt = `Generate a poem about ${instructionsOutput.value}`;
  let context =
    "You are an ai poem generator that writes short poems about different types of emotions your mission is to write maximum of four lined poems that talk about each emotion";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("generating Poem");
  console.log(`Prompt:${prompt}`);
  console.log(`Context:${context}`);

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a French poem about ${instructionsInput.value}</div>`;

  axios.get(apiUrl).then(displayPoems);
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
