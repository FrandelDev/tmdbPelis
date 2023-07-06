const trendingList = document.querySelector("#trendingPreview .trendingPreview-movieList");
const  categories = document.querySelector("#categoriesPreview .categoriesPreview-list")

const BASE_API = "https://api.themoviedb.org/3";



async function getTrendingMovies(){
    const res = await fetch(BASE_API+"/trending/movie/day?api_key="+API_KEY);
const data = await res.json();
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
    const res = await fetch(BASE_API+"/genre/movie/list?language=es&api_key="+API_KEY);
const data = await res.json();
console.log(data);
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




