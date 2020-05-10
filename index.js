console.log('this is index. js file ');


let source = 'nbc-news';
let apiKey = '781451821df848b09942e82a1567110d';

let newsAccordion = document.getElementById('newsAccordion');

const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true)
console.log(apiKey);

xhr.onload = function () {

  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    console.log(articles);
    let newsHtnl = '';
    articles.forEach(function (element, index) {
      let news = `  <div class="card">
      <div class="card-header" id="heading ${index}">
      <h2 class="mb-0">
        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
          <b>Breaking news ${index + 1}:</b>${element["title"]}
        </button>
      </h2>
    </div>

    <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
      <div class="card-body">
      ${element['content']}.<a href="${element['url']}" target='_blank'>Read more</a>
      </div>
    </div>
  </div>`

      newsHtnl += news;

    });
    newsAccordion.innerHTML = newsHtnl

  }
  else {

    console.log('some error ocuured');

  }



}
xhr.send()




