import { API_KEY, BASE_URL, IMG_URL, language } from "./api.js";

const shuffleButton = document.getElementById('shuffleButton')
shuffleButton.addEventListener('click', getMovie)

function getMovie() {
  let movieId = Math.floor(Math.random() * 1000 + 1)
  const container = document.querySelector('.container')
  const url = `${BASE_URL}${movieId}?api_key=${API_KEY}&${language}`
  
  axios.get(url)
    .then (response => {
      const data = response.data
      let movieTitle = data.title
      let movieOverview
      let poster = `${IMG_URL}`+ data.poster_path
      let rate = data.vote_average

      if(data.overview == ''){
        movieOverview = 'Desculpe. Não temos uma sinopse em Português deste filme.'
      } else {
        movieOverview = data.overview
      }

      container.innerHTML = `
        <div class="movie-poster">
          <img src="${poster}" alt="movie-poster" id="poster">
          <p>Nota média: ${rate}</p>
        </div>
        <div class="movie-infos">
          <h3 id="titleMovie">${movieTitle}</h3>
          <p id="movieOverview">${movieOverview}</p>
        </div>
      `
    })
    .catch (() =>{
      container.innerHTML = `
        <div class="movie-poster">
          <img src="./assets/coding.png" alt="movie-poster" id="poster">
        </div>
        <div class="movie-infos coding">
          <p class="noFilm">Ops, hoje não é dia de assistir filme. Bora codar! 🚀</p>
        </div>
      `
    })
}





