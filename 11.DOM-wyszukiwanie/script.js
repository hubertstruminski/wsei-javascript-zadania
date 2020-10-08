//Zadanie 1
const list = window.document.getElementsByClassName('list');

//Zadanie 2
function returnTags(className) {
    const result = document.getElementsByClassName(className);
    console.log(result[0].innerHTML);
    console.log(result[1].innerHTML);
}
returnTags('list');

//Zadanie 3
const idList = document.getElementById('list');

//Zadanie 4
function showTags(result) {
    console.log(result);
}
//1
const li = document.getElementsByTagName('li');
showTags(li);

//2
const ul = document.getElementsByTagName('ul');
const resultUl = ul[0].outerHTML + ul[1].outerHTML;
showTags(resultUl);

// const spans = document.getElementsByTagName('span');
// showTags(spans);

// const divWithListClass = document.getElementsByClassName('list');
// showTags(divWithListClass);