let shadowColors = [
  "#F7797D",
  "#F7827E",
  "#F88A7F",
  "#F8937F",
  "#F89B80",
  "#F9A481",
  "#F9AC82",
  "#FAB583",
  "#FABD84",
  "#FAC684",
  "#FBCE85",
  "#FBD786",
  "#FBD786",
  "#F6DB8E",
  "#F1DE96",
  "#EDE29E",
  "#E8E6A6",
  "#E3E9AE",
  "#DEEDB5",
  "#D9F0BD",
  "#D4F4C5",
  "#D0F8CD",
  "#CBFBD5",
  "#C6FFDD"
]

let text = document.getElementById("my-logo");

let shadow = "";

const createShadow = (numStart, numEnd, color) => {
  for (let i = numStart; i <= numEnd; i++) {
    shadow += `${i * 1}px ${i * 1.5}px 0px ${color},`;
  }
};

let myColor = "#fb2684"

createShadow(0, 30, "pink");

createShadow(31, 61, "#fb2684");

createShadow(61, 91, "#011627")

text.style.textShadow = shadow.slice(0, -1);

