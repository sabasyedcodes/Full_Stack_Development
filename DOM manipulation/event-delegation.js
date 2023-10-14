// Event Delegation

// It allows users to append a SINGLE event listener to a parent that adds it to all of its present descendants and future descendants that match a selector.
/*
document.querySelector('#football').addEventListener('click',function(e){
  console.log('football is clicked');

  const target = e.target;
  if (target.matches('li')){
    target.style.backgroundColor = 'lightblue'
  }
})
document.querySelector('#basketball').addEventListener('click',function(e){
  console.log('basketball is clicked');

  const target = e.target;
  if (target.matches('li')){
    target.style.backgroundColor = 'lightblue'
  }
})
document.querySelector('#boxing').addEventListener('click',function(e){
  console.log('boxing is clicked');

  const target = e.target;
  if (target.matches('li')){
    target.style.backgroundColor = 'lightblue'
  }
})
document.querySelector('#tennis').addEventListener('click',function(e){
  console.log('tennis is clicked');

  const target = e.target;
  if (target.matches('li')){
    target.style.backgroundColor = 'lightblue'
  }
})
document.querySelector('#golf').addEventListener('click',function(e){
  console.log('golf is clicked');

  const target = e.target;
  if (target.matches('li')){
    target.style.backgroundColor = 'lightblue'
  }
})
*/
// this the shorter code of the above event listener this is how we can achieve using event delegation

document.querySelector('#sports').addEventListener('click',function(e){
  console.log(e.target.getAttribute('id')+' is clicked');
  const target = e.target;
  if (target.matches('li')){
    target.style.backgroundColor = 'lightblue';
  }
})

const sports = document.querySelector('#sports');
const newSport = document.createElement('li');
newSport.innerText = 'rugby';
newSport.setAttribute('id','rugby');
sports.appendChild(newSport);
