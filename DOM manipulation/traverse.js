// DOM manipulation
// Traverse the DOM
// Parent Node Traversal
// let ul = document.querySelector('ul');
// console.log(ul.parentNode.parentNode); //body is the parent 
// console.log(ul.parentElement.parentElement); // body is the parent

// const html = document.documentElement;

// // mostly we will use parent node to traverse
// console.log(html.parentNode);
// console.log(html.parentElement);

//Child Node Traversal

// let ul = document.querySelector('ul');
// console.log(ul.childNodes); // it will count spaces as well so that's why its 7
// console.log(ul.firstChild);
// console.log(ul.lastChild);

// ul.childNodes[1].style.backgroundColor = 'blue';

// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);


// Sibling Node Traversal

// let ul = document.querySelector('ul');
// const div = document.querySelector('div');
// console.log(div.childNodes);
// // console.log(ul.previousSibling);
// // console.log(ul.nextSibling);
// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);
