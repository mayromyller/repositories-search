self.onmessage = ({data}) => {
  const template = render(data);
  postMessage(template);
}

function render({listItems, languageTag}) {
  let html = '';
  const numberFormater = new Intl.NumberFormat(languageTag);
  const dateFormater = new Intl.DateTimeFormat(
    languageTag, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

  listItems.forEach(item => {
    const forks = numberFormater.format(item.forks);
    const createdAt = dateFormater.format(new Date(item.created_at))
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
  return html;
}