let fetchApi = "https://gnews.io/api/v4/search?q=Google&lang=en&max=10&apikey=6f8b19a189e0c74cc4d77f5471587f29"

async function fetchNews() {
    try {
        let response = await fetch(fetchApi);
        let data = await response.json();
        renderNews(data.articles);
        console.log(data.articles);
    }

    catch (error) {
        console.log("Error fetching news:", error);
    }

}



async function renderNews(articles) {
    let container = document.getElementById("newsContainer");
    container.innerHTML = "";

    articles.forEach(article => {
        let card = `
         <div class="card mb-4 shadow-sm">
                <img src="${article.image || './assets/placeholder.jpg'}" class="card-img-top" alt="News Image">
                <div class="card-body">
                    <h5 class="card-title">${article.title}</h5>
                    <p class="card-text">${article.description || "No description available."}</p>
                    <a href="${article.url}" target="_blank" class="btn btn-primary">Go to website</a>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}


fetchNews();