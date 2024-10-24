const cards = document.querySelector(".cards");
const category = document.querySelector(".category");
const catspan = document.querySelectorAll(".category span");
const backupImage =
  "https://images.unsplash.com/photo-1593789198777-f29bc259780e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const url =
  "https://newsapi.org/v2/everything?q=tesla&from=2024-09-24&sortBy=publishedAt&apiKey=79f16fa227b54d3088bc2d6944c3eedd";
const newsB =
  "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=79f16fa227b54d3088bc2d6944c3eedd";
const newsC =
  "https://newsapi.org/v2/everything?q=apple&from=2024-10-23&to=2024-10-23&sortBy=popularity&apiKey=79f16fa227b54d3088bc2d6944c3eedd";
const newsD =
  "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=79f16fa227b54d3088bc2d6944c3eedd";

async function dataRequest(url) {
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}
category.addEventListener("click", (event) => {
  if (event.target.tagName === "SPAN") {
    cards.innerHTML = "";
    urlRequest(event.target.dataset.id);
  }
});
function urlRequest(url) {
  dataRequest(url).then((res) => {
    res.articles.forEach((news) => {
      cards.innerHTML += `<div class="card">
                              <div class="image">
                                  <img src="${
                                    news.urlToImage
                                      ? news.urlToImage
                                      : backupImage
                                  }" alt="Default News Image">
                              </div>
                              <div class="information">
                                  <div>
                                      <p class="title">${
                                        news.title || "No Title Available"
                                      }</p>
                                      <p class="description">${
                                        news.description ||
                                        "No Description Available"
                                      }</p>
                                      <p class="time">
                                          <span>${new Date(
                                            news.publishedAt
                                          ).toLocaleTimeString()}</span>
                                          <span>${new Date(
                                            news.publishedAt
                                          ).toLocaleDateString()}</span>
                                      </p>
                                  </div>
                                  <div class="other">
                                      <span class="source">${
                                        news.source.name || "Unknown Source"
                                      }</span>
                                      <a class="url" href="${
                                        news.url
                                      }" target="_blank">Read Article <i class="bi bi-arrow-right"></i></a>
                                  </div>
                              </div>
                          </div>`;
    });
  });
}
urlRequest(newsD);
