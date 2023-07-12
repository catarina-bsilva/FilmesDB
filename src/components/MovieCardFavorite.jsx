import { Link } from "react-router-dom"
import { useState } from 'react'

import { FaStar } from 'react-icons/fa'
import { MdFavorite, MdOutlineFavoriteBorder } from 'react-icons/md'

const ImgUrl = import.meta.env.VITE_IMG
const MoviesUrl = import.meta.env.VITE_API
const ApiKey = import.meta.env.VITE_API_KEY

const MovieCardFavorite = ({Movie, ShowLink =true}) => { //recebemos o objecto movie da API e ShowLink para mostrar ou nao botao para acessar a view individual de cada movie
  
const { Poster, Name, Pontuacao, IsFavorite } = Movie 
const [isFavorite, setIsFavorite] = useState(IsFavorite)
const [prevIsFavorite, setprevIsFavorite] = useState(false)

const TurnFavorite = (Movie, isAddFavorite) => {
  setIsFavorite(prevIsFavorite => !prevIsFavorite)

  function fetchMovieDetails() {
    fetch(`${MoviesUrl}${Movie.id}?${ApiKey}`)
      .then(response => response.json())
      .then(Data => {
        const movieWithDetails = {
          id: Data.id,
          Poster: ImgUrl + Data.poster_path,
          Name: Data.title,
          Pontuacao: Data.vote_average,
          IsFavorite: !prevIsFavorite,
          Citacao: Data.tagline,
          Orcamento: Data.budget,
          Receita: Data.revenue,
          Duracao: Data.runtime,
          Descricao: Data.overview
        }
        console.log(movieWithDetails)
        return movieWithDetails
      })
      .then(movieWithDetails => {
        if (isAddFavorite) {
          fetch('http://localhost:3000/Favorites', {
            method: 'POST',
            body: JSON.stringify(movieWithDetails),
            headers: {
              'Content-Type': 'application/json'
            }
          })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
        } else {
          fetch(`http://localhost:3000/Favorites/${Movie.id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            }
          })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
            
        }
      })
      .catch(Error => console.error(Error));
  }

  fetchMovieDetails()
}


  return (
    <div className="MovieCard">
       <img src={Poster} alt={Movie.title} // movie.poster_path é uma propriedade de movie que podemos encontrar em network quando a pesquisa é feita, é o link para o Poster do filme
       /> 
       <h2>{Name}</h2>
       <p className="StarFavorite">
          <span><FaStar id="Star"/> {Pontuacao}</span>
          <span className="FavoriteIcon"onClick={() =>
            TurnFavorite({
              id: Movie.id,
              Poster: ImgUrl + Movie.poster_path,
              Name: Movie.title,
              Pontuacao: Movie.vote_average,
              IsFavorite: isFavorite,
              Citacao: Movie.tagline,
              Orcamento: Movie.budget,
              Receita: Movie.revenue,
              Duracao: Movie.runtime,
              Descricao: Movie.overview
            }, !isFavorite)
  }>
            {isFavorite ? <MdFavorite className="Favorite" /> : <MdOutlineFavoriteBorder className="Favorite" />}
          </span>
        
       </p>
       {ShowLink && <Link to={`/movie/${Movie.id}`}>Detalhes</Link> //seShowLink for verdade cria um botão que nos leva para a página do filme 
       } 
    </div>
  )
}

export default MovieCardFavorite
