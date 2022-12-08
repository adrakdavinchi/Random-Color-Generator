const containerEl = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
    const colorConatainerEl = document.createElement("div");

    colorConatainerEl.classList.add("color-container");

    containerEl.appendChild(colorConatainerEl);
    
}
const colorConatainerEls = document.querySelectorAll(".color-container");
generateColors();

function generateColors(){
    colorConatainerEls.forEach((colorConatainerEl)=>{
        const newColorCode = randomColor();
        colorConatainerEl.style.backgroundColor="#"+newColorCode;
        colorConatainerEl.innerText = "#"+newColorCode;

    });
}
console.log(colorCode);
function randomColor(){
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let colorCode = "";
    for (let index = 0; index < colorCodeLength; index++) {
        const randomNum= Math.floor(Math.random()*chars.length);
        colorCode += chars.substring(randomNum,randomNum+1);
        // console.log(colorCode,randomNum)
    }
    return colorCode;
}