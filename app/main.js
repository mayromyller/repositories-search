const Template = (function(){
  const listEl = document.querySelector('#list');
  const lanTags = document.querySelector('#lang-tags');
  
  let listItems = [];
  
  let languageTag = 'pt-BR';
  lanTags.addEventListener('change', changeLanguage);
  
  function changeLanguage(){
    languageTag = lanTags.value;
    render();

  }

  function setList(list){
    listItems = list;
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

  return {
    setList
  }

})();

const Data = (function($){

  const searchInput = document.querySelector('#search');
  searchInput.addEventListener('keyup', search);

  function search(event){
    if(event && event.keyCode === 13){
      $.setList([
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
        }
      ])
    }
  }
})(Template);

