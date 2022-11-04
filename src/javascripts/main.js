//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"
import { movies } from "./movies"

for (let m of movies) {
  let thumbnail = document.getElementById(`m${m.id}`)

  thumbnail.innerHTML = `
    <img src="${m.poster}" alt="${m.title}" class="img-thumbnail" />
  `

  thumbnail.onclick = function () {
    displayMovie(m)
  }
}

let featured_movie = document.querySelector(".featured")

function displayMovie(movie) {
  featured_movie.innerHTML = `
    <div class="card">
        <div class="card-header">${movie.title}</div>
        <img src="${movie.poster}" alt="${movie.title}" class="card-img-top" />
        <div class="card-body">
            <h5 class="card-title"><small>${movie.year}, ${movie.genre}</small></h5>
            <p class="card-text">${movie.plot}</p>
        </div>
        <div class="card-footer text-muted">
            <div class="row row-cols-3">
            <div class="col"><strong>Rating: ${movie.rating}</strong></div>
            <div class="col"><strong>Rated: ${movie.rated}</strong></div>
            <div class="col"><strong>Votes: ${movie.votes}</strong></div>
            </div>
        </div>
    </div>
    `
}

function searchMovies(event) {
  event.preventDefault()

  let input = document.querySelector('[type="search"').value || ""

  let count = 0

  for (let m of movies) {
    if (m.title.toLowerCase().indexOf(input.toLowerCase()) == -1) {
      document.querySelector(`#m${m.id}`).classList.add("d-none")
    } else {
      document.querySelector(`#m${m.id}`).classList.remove("d-none")
      count++
    }
  }

  featured_movie.innerHTML = count == 0 ? "Nothing was found" : ""
}

document.querySelector("button").onclick = searchMovies
document.querySelector('[type="search"').onsearch = searchMovies
document.querySelector("form").submit = searchMovies
