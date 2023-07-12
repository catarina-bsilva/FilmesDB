import { useEffect, useState } from 'react'
import MovieCardFavorite from '../components/MovieCardFavorite'

const Favorites = () => {
  const [Movies, setMovies] = useState([])

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch("http://localhost:3000/Favorites")
      const data = await res.json()
      setMovies(data)
    }

    fetchMovies()
  }, [])

  return (
    <div className='Container'>
      <h2 className="Title">Filmes Favoritos: <span className="FavoriteMovies"></span></h2>
      <div className="MoviesContainer">
        {Movies?.length === 0 && <p>Não tem favoritos</p>}
        {Movies?.length > 0 && Movies.map((Movie) => <MovieCardFavorite key={Movie.id} Movie={Movie}/>)}
      </div> 
    </div>
  )
}

export default Favorites