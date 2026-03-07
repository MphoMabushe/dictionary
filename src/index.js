function displayDefination(response) {
      new Typewriter('#defination', {
  strings: response.data.answer,
  autoStart: true,
  delay:1,
  cursor:"",
      });
}

function generateDefination(event) {
    event.preventDefault();

    let userInputElement = document.querySelector("#user-input");
    let apiKey ="31o84e907eeba386aabt3500e710ff10";
    let prompt =`user instruction:Generate a defination of the word ${userInputElement.value}`;
    let context ="You are knowledgeable and an expect in defining words.Please generate a full defination and sentence example in basic HTML.Do not show the text HTML.make sure to follow the user instructions. ";
    let apiUrl =`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let definationElement = document.querySelector("#defination");
     definationElement.classList.remove("hidden");
     definationElement.innerHTML = `<div class="blink">Generating defintion for ${userInputElement.value}...</div>`;

    axios.get(apiUrl).then(displayDefination);
}

let dictioneryFormElement = document.querySelector("#defination-generator");
dictioneryFormElement.addEventListener("submit",generateDefination);