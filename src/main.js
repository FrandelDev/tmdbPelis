const trendingList = document.querySelector("#trendingPreview .trendingPreview-movieList");
const  categories = document.querySelector("#categoriesPreview .categoriesPreview-list");
const  categoryList = document.querySelector(".categories-list .category-container");
const  filterList = document.querySelector("#genericList");


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
    trendingList.innerHTML = '';
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
    const {data} = await api("/genre/movie/list");
    categories.innerHTML = '';
data.genres.forEach(category => {

    categories.innerHTML += `
    <div class="category-container">
<h3 id="${"id"+category.id}" class="category-title">${category.name}</h3>
</div>
`
 document.querySelector(`#id${category.id}`).addEventListener('click', () => {
    location.hash = `#category=${category.id}-${category.name}`;
  });
});
        
}
async function getMoviesByCategory(categoryId){
   const {data} =  await api('/discover/movie',{
    params:{
        "with_genres":categoryId
    }
   });
   filterList.innerHTML='';
   data.results.forEach(movie =>{
    filterList.innerHTML += `
   <div class="movie-container">
<img
        src="${'https://image.tmdb.org/t/p/w300'+movie.poster_path}"
        class="movie-img"
        alt="${movie.name}"
      />
</div>
   `
   })
   
}

async function searchMovie(query){
    const {data} = await api("/search/movie",{
        params: {
            query: query
        }
    });
    console.log(data);
    filterList.innerHTML = '';
    data.results.forEach(movie =>{
        filterList.innerHTML += `
        <div class="movie-container">
<img
        src="${'https://image.tmdb.org/t/p/w300'+movie.poster_path}"
        class="movie-img"
        alt="${movie.name}"
      />
</div>
        `
    });
}


