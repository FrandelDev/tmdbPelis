const trendingList = document.querySelector("#trendingPreview .trendingPreview-movieList");
const  categories = document.querySelector("#categoriesPreview .categoriesPreview-list")

const BASE_API = "https://api.themoviedb.org/3";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        "Content-Type": "application/json"
    },
    params: {
        "api_key": API_KEY,  // API_KEY in secrets.js
        "language": "es-ES"
    }
});


async function getTrendingMovies(){
    const {data} = await api("/trending/movie/day"); 

data.results.forEach(movie => {
    trendingList.innerHTML += `
    <div class="movie-container">
<img
          src="${'https://image.tmdb.org/t/p/w300'+movie.poster_path}"
          class="movie-img"
          alt="Nombre de la película"
        />
</div>
`
});
        
}
async function getCategories(){
    const {data} = await api(BASE_API+"/genre/movie/list");

data.genres.forEach(category => {

    categories.innerHTML += `
    <div class="category-container">
<h3 id="${"id"+category.id}" class="category-title">${category.name}</h3>
</div>
`

});
        
}
getCategories();
getTrendingMovies();




