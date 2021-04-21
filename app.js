let text = document.getElementById("my-logo");

const createShadow = (num, elem) => {
  let shadow = "";

  for (let i = 0; i <= num; i++) {
    if (i === num) {
      shadow += `${i * 1}px ${i * 1}px 0px #fb2684`;
    } else {
      shadow += `${i * 1}px ${i * 1}px 0px #fb2684,`;
    }
  }
  
  console.log(shadow)

  elem.style.textShadow = shadow;
};

createShadow(30, text);