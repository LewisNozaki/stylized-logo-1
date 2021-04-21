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

