let message = document.getElementById("enc");
let decMessage = document.getElementById("dec");
let key = document.getElementById("key");
let encBtn = document.getElementById("encbtn");
let decbtn = document.getElementById("decbtn");

function encryptSecurity(str, num) {
  let lower = str.toLowerCase();
  let alphapet = "abcdefghijklmnopqrstuvwxyz".split("");
  let newStr = "";

  for (let i = 0; i < lower.length; i++) {
    let currentLetter = lower[i];
    let currentIndex = alphapet.indexOf(currentLetter);
    let newIndex = currentIndex + num;
    if (newIndex > 25) newIndex -= 26;
    if (newIndex < 0) newIndex += 26;
    if (str[i] === str[i].toUpperCase()) {
      newStr += alphapet[newIndex].toUpperCase();
    } else {
      newStr += alphapet[newIndex];
    }
  }
  return newStr;
}
function decryptSecurity(str) {
  let lower = str.toLowerCase();
  let alphapet = "abcdefghijklmnopqrstuvwxyz".split("");
  let newStr = [];
  for (let i = 1; i <= 25; i++) {
    for (let j = 0; j < lower.length; j++) {
      let currentLetter = lower[j];
      let currentIndex = alphapet.indexOf(currentLetter);
      let newIndex = currentIndex - i;
      if (newIndex > 25) newIndex -= 26;
      if (newIndex < 0) newIndex += 26;
      if (str[j] === str[j].toUpperCase()) {
        newStr.push(alphapet[newIndex].toUpperCase());
      } else {
        newStr.push(alphapet[newIndex]);
      }
    }
    newStr.push("|");
  }
  return newStr.join("").split("|").slice(0, -1);
}

encbtn.onclick = () => {
  document.getElementById("encryptionMessage").innerHTML = "";
  let splitedMessage = message.value.split(" ").join("");
  let div = document.createElement("div");
  div.append(encryptSecurity(splitedMessage, +key.value));
  document.getElementById("encryptionMessage").append(div);
};

decbtn.onclick = () => {
  document.getElementById("decryptionMessage").innerHTML = "";
  let splitedMessage = decMessage.value;
  let div;
let h3 =document.createElement("h3");
h3.className ="title";
h3.append("All Possible Decrypted Messages");
document.getElementById("decryptionMessage").append(h3)
  decryptSecurity(splitedMessage).map((ele) => {
    div = document.createElement("div");
    div.append(ele);
    document.getElementById("decryptionMessage").append(div);
  });
};
