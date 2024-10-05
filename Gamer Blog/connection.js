const likeBtns = document.querySelectorAll('.like');
const facebookBtns = document.querySelectorAll('.facebook');
const instaBtns = document.querySelectorAll('.insta');
const shareBtns = document.querySelectorAll(".share");
const divs = document.querySelectorAll(".column");

//like buttons
likeBtns.forEach(likeBtn => {
  likeBtn.addEventListener('click', () => {
    likeBtn.querySelector('i').style.color = "red";
  });
});

//facebook buttons
facebookBtns.forEach(facebookBtn => {
  facebookBtn.addEventListener('click', () => {
    window.open("https://www.facebook.com/fatima.adreeta?mibextid=ZbWKwL");
  });
});

//instagram buttons
instaBtns.forEach(instaBtn => {
  instaBtn.addEventListener('click', () => {
    window.open("https://www.instagram.com/teslafan_catdogluvr_milktea/");
  });
});

//share buttons
shareBtns.forEach(shareBtn => {
  shareBtn.addEventListener('click', () => {
    window.open("https://wa.me/182756246");
  });
});

//game descriptions
divs.forEach(div => {
  div.addEventListener('click', () => {
    if (div.classList.contains("csgo")) {
      window.open("csgo.html"); 
    }
    if (div.classList.contains("valorant")) {
      window.open("valorant.html");
    }
    if (div.classList.contains("apex")) {
      window.open("apex.html");
    }
  });
});