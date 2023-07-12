import {useState, useEffect} from 'react'
import { useSearchParams } from 'react-router-dom'
import MovieCard from '../components/MovieCard.jsx'

const SearchUrl = import.meta.env.VITE_SEARCH
const ApiKey = import.meta.env.VITE_API_KEY

import './MoviesGrid.css'

const Search = () => {

  const [SearchParams] = useSearchParams() //useSearchParams, quando utilizado, manda mais de um item, manda tipo um array de funções, envolvendo SearchParams num array conseguimos destruturar a primeira SearchParams e usa-la
  const [Movies, setMovies] = useState([])
  const Query = SearchParams.get("q")

  const GetSearchedMovies = async(url) => {

    const Res = await fetch(url) 
    const Data = await Res.json() 

    setMovies(Data.results)
    console.log(Data.results)
  }

  useEffect(() => { 

    const SearchWithQueryUrl = `${SearchUrl}?${ApiKey}&query=${Query}`;
    GetSearchedMovies(SearchWithQueryUrl);

  }, [Query])


  return (
    <div className='Container'>
        <h2 className="Title">Resultados para: <span className="QueryText">
          {Query //query é o texto que o usuário digita para procurar algo
        }</span>
        </h2>
        <div className="MoviesContainer">
            {Movies?.length ===0 && <p>Carregando...</p>}
            {Movies?.length > 0 && Movies.map((Movie) =><MovieCard key={Movie.id} Movie={Movie}/>)}
        </div>
    </div>
  )
}

export default Search