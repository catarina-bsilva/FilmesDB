import { useEffect, useState, useContext } from 'react'
import MovieCardFavorite from '../components/MovieCardFavorite'
import { favoriteContext } from '../context'
import data from '../db.json'

const Favorites = () => {
  const {Favorite, setFavorite} = useContext(favoriteContext)
  const {favoriteState, setFavoriteState} = useContext(favoriteContext)

  return (
    <div className='Container'>
      <h2 className="Title">Filmes Favoritos: <span className="FavoriteMovies"></span></h2>
      <div className="MoviesContainer">
        {favoriteState?.length === 0 && <p>Não tem favoritos</p>}
        {favoriteState?.length > 0 && favoriteState.map((Movie) => <MovieCardFavorite key={Movie.id} Movie={Movie}/>)}
      </div> 
    </div>
  )
}

export default Favorites