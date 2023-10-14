// Event Probagation
// it goes from top to our desired loction in html
/*
window.addEventListener("click",function(){
  console.log('Window');
},true);

document.addEventListener("click",function(){
  console.log('Document');
},true);

document.querySelector(".div2").addEventListener("click",function(){
  console.log('DIV 2');
},true);

document.querySelector(".div1").addEventListener("click",function(){
  console.log('DIV 1');
},true);

document.querySelector("button").addEventListener("click",function(e){
  console.log(e.target.innerText = 'clicked!');
},true);
*/
// Event Bubbling phase 
// basically it is reverse of the above phase
window.addEventListener("click",function(){
  console.log('Window');
},false);

document.addEventListener("click",function(){
  console.log('Document');
},false);

document.querySelector(".div2").addEventListener("click",function(){
  // lets say that we want to stop bubbling here
  //e.stopPropagation() add e as parameter inorder for this to work
  console.log('DIV 2');
},{once:true});

document.querySelector(".div1").addEventListener("click",function(){
  console.log('DIV 1');
},false);

document.querySelector(".button").addEventListener("click",function(e){
  e.preventDefault()
  console.log(e.target.innerText = 'clicked!');
},false);