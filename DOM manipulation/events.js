// Event Listeners
//element.addeventListener("click",function);

const button2 = document.querySelector('.btn-2');
function alertBtn(){
  alert('I also love Javascript');
}
button2.addEventListener("click",alertBtn);

//Mouseover
const newBackgroundColor = document.querySelector('.box-3');
function changeBgColor(){
  newBackgroundColor.style.backgroundColor = 'lightpink';
}
newBackgroundColor.addEventListener("mouseover",changeBgColor);