console.log('new func');


let val;
val = document;
val = document.all;
val = document.all[2];
val = document.all.length;
val = document.URL;


val = document.forms;
val = document.scripts;

//console.log(val);
/*
console.log(document.getElementById('task-title').id);


//change styling

document.getElementById('task-title').style.background = '#333';
document.getElementById('task-title').style.color = '#fff';
//document.getElementById('task-title').style.display = 'none';

//change text

document.getElementById('task-title').textContent = 'Task-List';
document.getElementById('task-title').innerText = 'MY Tasks';
document.getElementById('task-title').innerHTML = '<span style="color:red"> Task List </span>';

*/


//document.querySelector()

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red'; // gets the first element, its single element selector
document.querySelector('ul li').style.color = 'blue';

document.querySelector('li:last-child').textContent = 'red';
document.querySelector('li:nth-child(3)').style.color = 'yellow';


// DOM selectors for multiple events


//DOM TRAVERSAL

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;

//get child nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[3].nodeType;

//Nodetypes
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype
//get children element nodes

val = list.children; 
val = list.children[1];

//children of children
val = list.children[3].children;
val = list.children[3].children[0];
list.children[1].textContent = 'hello';

//first child
val = list.firstChild;
val = list.firstElementChild;

//last child
val = list.lastChild;
val = list.lastElementChild;

//cound child elements
val = list.childElementCount;

//get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

//get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;

//get previous sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;//null as first element


// CREATING ELEMENTS

const li = document.createElement('li');

//create class
li.className = 'collection-item';

//create id
li.id = 'new-item';

li.setAttribute('title', 'new Item');

li.appendChild(document.createTextNode('child'));

//create new element
document.querySelector('ul.collection').appendChild(li)

//create link to new element
const link = document.createElement('a');
//add classes
link.className = 'delete-item secondary-content';

//add icon html
link.innerHTML = '<i class="fa fa-remove"></i>'

//append link into li
li.appendChild(link);

console.log(li);

