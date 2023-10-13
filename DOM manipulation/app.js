/* DOM manipulation

//GetElementById()

//const title = document.getElementById('main-heading');
//console.log(title); // it outputs the h1 element

//GetElementByClassName()

//const listItem = document.getElementsByClassName('list-items');
//console.log(listItem); // o/ps the class attribute items


//getElementsByTagName()

//const listItem = document.getElementsByTagName('li');
//console.log(listItem); // o/p the tag elements


//querySelector() we use this to select only 
// class, id, tag, element

//const container = document.querySelector('div');
//console.log(container); 

//querySelectorAll() we use when we have 
// multiple selectors

//const container = document.querySelectorAll('div');
//console.log(container);
*/

// Styling elements

//const title =document.querySelector('#main-heading');
//title.style.color = 'lightgreen';
//console.log(title);

// in javascript the css is written in camelcase not with dash

//const listItems = document.querySelectorAll('.list-items');
//listItems.style.fontSize = '2rem';
//for(i=0;i<listItems.length;i++){
//  listItems[i].style.fontSize = '2rem';
//}

// creating elements
const ul = document.querySelector('ul');
const li = document.createElement('li');

ul.append(li) //this addes the new list element
//modifying the text
li.innerText = 'Me Before You'; // added the new text to the empty list item

//modifying attributes and classes
      // Attribute
// li.setAttribute('id','main-heading');
// li.removeAttribute('id'); // removed the extra list we created

// const title = document.querySelector('#main-heading');
// console.log(title.getAttribute('id'));

     //classes
//li.classList.add('list-items');

//li.classList.remove('list-items'); // removed the extra li element

//console.log(li.classList.contains('list-items'));

// remove element
//li.remove();


// const firstListItem = document.querySelector('.list-items');

// see the console to understand their diff
// console.log(firstListItem.innerText);
// console.log(firstListItem.textContent);
// console.log(firstListItem.innerHTML);
// innerHTML has security issues so most of the
// time developers use innerText




