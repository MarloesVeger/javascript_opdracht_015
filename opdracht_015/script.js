const setAlarm = document.getElementById('mybutton');

setAlarm.addEventListener('click', function () {
    alert("button clicked");
})

const colorBlue = document.querySelector(".blue-background");
const colorButton = document.getElementById("secondbutton");

// const changeColor = () => {
//     colorBlue.classList.add("red-background");
// };
// colorButton.addEventListener('click', changeColor);

const toggleColor = () => {
    colorBlue.classList.toggle("red-background");
};
colorButton.addEventListener('click', toggleColor);