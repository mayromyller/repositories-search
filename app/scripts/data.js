import * as $ from './template.js'

const searchInput = document.querySelector('#search');
searchInput.addEventListener('keyup', search);

/* 
function search(event){
  if(event && event.keyCode === 13){
    const searchQuery = searchInput.value;
    fetch(`https://api.github.com/search/repositories?q=${searchQuery}`)
    .then(res=> res.json())
    .then(res=>res.items)
    .then($.setList);
  }
}
*/

export default async function search(event) {
  if (event && event.keyCode === 13) {
    const searchQuery = searchInput.value;
    let res = await fetch(`https://api.github.com/search/repositories?q=${searchQuery}`)
    res = await res.json();
    $.setList(res.items);
  }
}