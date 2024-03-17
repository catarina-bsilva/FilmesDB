import { Link } from "react-router-dom"
import { useState, useContext } from 'react'

import { FaStar } from 'react-icons/fa'
import { MdFavorite, MdOutlineFavoriteBorder } from 'react-icons/md'
import { favoriteContext } from "../context"
import '../pages/Movie.css'

const ImgUrl = import.meta.env.VITE_IMG
const MoviesUrl = import.meta.env.VITE_API
const ApiKey = import.meta.env.VITE_API_KEY

const MovieCard = ({Movie, ShowLink =true}) => { //recebemos o objecto movie da API e ShowLink para mostrar ou nao botao para acessar a view individual de cada movie
const {Favorite, setFavorite} = useContext(favoriteContext)
const {favoriteState, setFavoriteState} = useContext(favoriteContext)
const [prevIsFavorite, setprevIsFavorite] = useState(false)
const [IsFavorite, setIsFavorite] = useState(false)
const favoriteMovie = favoriteState.some(favMovie => favMovie.id === Movie.id)

const TurnFavorite = (Movie) => {
  const isCurrentlyFavorite = favoriteState.some(favMovie => favMovie.id === Movie.id);
  if (isCurrentlyFavorite) {
    // Remove do estado de favoritos
    setFavoriteState(favoriteState.filter(favMovie => favMovie.id !== Movie.id));
  } else {
    // Adiciona ao estado de favoritos
    setFavoriteState([...favoriteState, Movie])
  }
}


  return (
    <div className="MovieCard">
       <img src={ImgUrl + Movie.poster_path} alt={Movie.title} // movie.poster_path é uma propriedade de movie que podemos encontrar em network quando a pesquisa é feita, é o link para o Poster do filme
       /> 
       <h2>{Movie.title}</h2>
       <p className="StarFavorite">
          <span><FaStar id="Star"/> {Movie.vote_average}</span>
          <span className="FavoriteIcon"onClick={() =>
            TurnFavorite({
              id: Movie.id,
              Poster: ImgUrl + Movie.poster_path,
              Name: Movie.title,
              Pontuacao: Movie.vote_average,
              IsFavorite,
              Citacao: Movie.tagline,
              Orcamento: Movie.budget,
              Receita: Movie.revenue,
              Duracao: Movie.runtime,
              Descricao: Movie.overview
            }, !IsFavorite)
  }>
            {favoriteMovie ? <MdFavorite className="Favorite" /> : <MdOutlineFavoriteBorder className="Favorite" />}
          </span>
        
       </p>
       {ShowLink && <Link to={`/movie/${Movie.id}`}>Detalhes</Link> //seShowLink for verdade cria um botão que nos leva para a página do filme 
       } 
    </div>
  )
}

export default MovieCard
