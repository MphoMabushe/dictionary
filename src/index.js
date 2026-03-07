function generateDefination(event) {
    event.preventDefault();

    new Typewriter('#defination', {
  strings: ["poise is a graceful and elegant bearing in a person </br> example poise and good deportment can be cultivated <br/>"],
  autoStart: true,
  delay:1,
  cursor:"",
});
}

let dictioneryFormElement = document.querySelector("#defination-generator");
dictioneryFormElement.addEventListener("submit",generateDefination);