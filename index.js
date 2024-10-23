const cards = document.querySelector(".cards");
const url =
  "https://newsapi.org/v2/everything?q=tesla&from=2024-09-23&sortBy=publishedAt&apiKey=79f16fa227b54d3088bc2d6944c3eedd";
async function dataRequest(url) {
  try {
    const response = await fetch(url);
    const json = response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

dataRequest(url).then((res) => {
  res.articles.forEach((news) => {
    cards.innerHTML += `<div class="card">
                            <div class="image">
                                <img src="${news.urlToImage}"
                                    alt="Default News Image">
                            </div>
                            <div class="information">
                                <div>
                                    <p class="title">${news.title}</p>
                                    <p class="description">${news.description}</p>
                                    <p class="time">
                                        <span>19:17:13</span>
                                        <span>2022-05-19</span>
                                    </p>
                                </div>
                                <div class="other">
                                    <span class="source">${news.source.name}</span>
                                    <a class="url" href="${news.url}" target="_blank">Read Article <i
                                            class="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>`;
  });
});
