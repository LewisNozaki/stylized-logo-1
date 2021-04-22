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
  "#C6FFDD",
  "#BDFFE0",
  "#B5FFE3",
  "#ACFFE6",
  "#A3FFE9",
  "#9AFFEC",
  "#92FFF0",
  "#89FFF3",
  "#80FFF6",
  "#77FFF9",
  "#6FFFFC",
  "#66FFFF"
]

let text = document.getElementById("my-logo");

let shadow = "";

const createShadow = (numStart, numEnd, color) => {
  for (let i = numStart; i <= numEnd; i++) {
    shadow += `${i * 1}px ${i * 1}px 0px ${color},`;
  }
};

let num1 = 0;

let num2 = 9;

for (let i = 0; i < shadowColors.length; i++) {
  createShadow(num1, num2, shadowColors[i]);
  num1 += 10;
  num2 += 14;
}

text.style.textShadow = shadow.slice(0, -1);

