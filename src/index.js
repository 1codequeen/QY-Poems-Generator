function generatePoem(event) {
  event.preventDefault();
}

new Typewriter("#poems", {
  strings: ["Roses are red...", "Violets are blue..."],
  autoStart: true,
  delay: 75,
  cursor: "",
});

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
