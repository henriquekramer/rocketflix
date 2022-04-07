import { API_KEY } from './api.js'
import { BASE_URL } from './api.js'
import { IMG_URL } from './api.js'
import { language } from './api.js'

const shuffleButton = document.getElementById('shuffleButton')
shuffleButton.addEventListener('click', getMovie)

function getMovie() {
  let randomId = Math.floor(Math.random() * 1001);
  const url = `${BASE_URL}/${randomId}?api_key=${API_KEY}&${language}`
  
  axios.get(url)
    .then (response => {
      const data = response.data
      titleMovie.textContent = data.title
      movieOverview.textContent = data.overview
      poster.src = `${IMG_URL}/`+ data.poster_path
     })
    .catch (error => console.error(error))
}





