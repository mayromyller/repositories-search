const listEl = document.querySelector('#list');
const lanTags = document.querySelector('#lang-tags');
const templateWorker = new Worker('./app/scripts/template_worker.js');

const config = {
  listItems: [],
  languageTag: 'pr-BR'
}

lanTags.addEventListener('change', changeLanguage);

function changeLanguage() {
  config.languageTag = lanTags.value;
  render();

}

export function setList(list) {
  config.listItems = list;
  render();
}

function render() {
  
  templateWorker.postMessage(config)
  templateWorker.onmessage = ({data})=>{
    listEl.innerHTML = data;
  }
}