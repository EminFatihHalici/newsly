let ApiKeywords = ["Google", "NASA", "Tech", "AI", "Sports", "Finance", "World", "Politics", "Health", "Education", "Environment", "Travel", "Culture", "Science", "Entertainment", "Business"];
let randomKeyword = ApiKeywords[Math.floor(Math.random() * ApiKeywords.length)];

let fetchApi = `https://gnews.io/api/v4/search?q=${randomKeyword}&lang=en&max=8&apikey=6f8b19a189e0c74cc4d77f5471587f29`;

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
         <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
            <div class="card h-100 shadow-sm">
                <img src="${article.image}" class="card-img-top" alt="News Image"style="height:180px; object-fit:cover;"onerror="this.src='./assets/placeholder.png'">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${article.title}</h5>
                    <p class="card-text text-truncate">${article.description || "No description available."}</p>
                    <div class="mt-auto d-flex justify-content-center">
                        <a href="${article.url}" target="_blank" class="btn btn-primary btn-sm">Go to Website</a>
                    </div>
                </div>
            </div>
        </div>
        `;
        container.innerHTML += card;
    });
}


fetchNews();

function getSearchInput() {
   return document.getElementById("searchInput").value.toLowerCase().trim();
}

function filterNews() {
    return articles.filter(article => (article.title && article.title.toLowerCase().includes(getSearchInput())) || (article.description && article.description.toLowerCase().includes(getSearchInput())));
}