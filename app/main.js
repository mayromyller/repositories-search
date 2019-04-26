const listEl = document.querySelector('#list');
const searchInput = document.querySelector('#search');
const lanTags = document.querySelector('#lang-tags');

let languageTag = 'pt-BR';

let listItems = [
  {
    full_name: 'Javascript',
    created_at: '2020-07-25T20:10:50Z',
    forks: 15300
  },
  {
    full_name: 'PHP 7',
    created_at: '2020-07-25T20:10:50Z',
    forks: 2123
  },
  {
    full_name: 'VueJs',
    created_at: '2020-07-25T20:10:50Z',
    forks: 256
  },
]

lanTags.addEventListener('change', changeLanguage);

function changeLanguage(){
  languageTag = lanTags.value;
  render();
}

function render() {
  let html = '';
  const numberFormater = new Intl.NumberFormat(languageTag);
  const dateFormater = new Intl.DateTimeFormat(
    languageTag,  {
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric'
  });

  listItems.forEach(item => {
    const forks = numberFormater.format(item.forks);
    const createdAt = dateFormater.format( new Date(item.created_at))
    html += `
    <li>
      <div>
        <b class="has-text-grey-dark">Name: </b>
        <a class="has-text-danger"> ${item.full_name} </a>
      </div>
      <div>
        <b class="has-text-grey-dark">Created At: </b> 
        <a class="has-text-danger"> ${createdAt} </a>
      </div>
      <div>
        <b class="has-text-grey-dark">Forks: </b> 
        <a class="has-text-danger"> ${forks} </a>
      </div>
    </li>
    `
  })
  listEl.innerHTML = html;
}

render();