const button = document.querySelector(".buttonGenerate");
const memeText = document.querySelector(".memeText");
const memeImage = document.querySelector("img");
const credits = document.querySelector(".credits");

const displayDetails = (title, image, credit) => {
  memeText.innerHTML = title;
  memeImage.setAttribute("src", image);
  credits.innerHTML = `meme by: ${credit}`;
};

const memeDisplay = () =>{
  fetch("https://meme-api.com/gimme")
    .then((memeResults) => memeResults.json())
    .then((readableMemes) => {displayDetails(readableMemes.title, readableMemes.url, readableMemes.author);})
};

button.addEventListener("click", memeDisplay);
memeDisplay();

//nameless 
//() == no parameter for the function
//() => {}  === holy trinity for your nameless function
//function memeDisplay(){}
//.then() ==> (memeResults) => not using any {} because its one-line code.
//``