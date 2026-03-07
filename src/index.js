function displayDefination(response) {

    console.log("defination generated")
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
    let context ="You are knoledgeable and an expect in defining words.Please generate a full defination and sentence example in basic HTML.Do not show the text HTML.make sure to follow the user instructions ";
    let apiUrl =`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    console.log("generating defination")
    console.log(`prompt:${prompt}`)
    console.log(`context:${context}`)
    axios.get(apiUrl).then(displayDefination);
}

let dictioneryFormElement = document.querySelector("#defination-generator");
dictioneryFormElement.addEventListener("submit",generateDefination);