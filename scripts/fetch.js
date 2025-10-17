let fetchApi = "https://gnews.io/api/v4/search?q=Google&lang=en&max=5&apikey=6f8b19a189e0c74cc4d77f5471587f29"

async function fetchNews() {
    try {
        let response = await fetch(fetchApi);
        let data = await response.json();
        console.log(data);
    }

    catch (error) {
        console.log("Error fetching news:", error);
    }

}

fetchNews();