import { Link } from "react-router-dom"
import { useState, useContext } from 'react'

import { FaStar } from 'react-icons/fa'
import { MdFavorite, MdOutlineFavoriteBorder } from 'react-icons/md'
import { favoriteContext } from "../context"

import '../pages/Movie.css'

const ImgUrl = import.meta.env.VITE_IMG
const MoviesUrl = import.meta.env.VITE_API
const ApiKey = import.meta.env.VITE_API_KEY

const MovieCardFavorite = ({Movie, ShowLink =true}) => { //recebemos o objecto movie da API e ShowLink para mostrar ou nao botao para acessar a view individual de cada movie
  
  const { Poster, Name, Pontuacao, IsFavorite } = Movie 
  const {Favorite, setFavorite} = useContext(favoriteContext)
  const {favoriteState, setFavoriteState} = useContext(favoriteContext)
  const [prevIsFavorite, setprevIsFavorite] = useState(false)
  const [isFavorite, setIsFavorite] = useState(true)
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
