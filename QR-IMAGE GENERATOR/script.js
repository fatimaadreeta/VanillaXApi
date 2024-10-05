const userInput = document.querySelector("#user-text-input");
const qrCode = document.querySelector("#qr-code");
const button = document.querySelector("#button");

function generateQRCode() {
  if (userInput.value != "") {
    let api = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + userInput.value;
    qrCode.src = api;
  }
}

button.addEventListener("click", generateQRCode);