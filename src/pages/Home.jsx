import {React, useState, useEffect} from 'react'
import MovieCard from '../components/MovieCard'

import './MoviesGrid.css'

const MoviesUrl = import.meta.env.VITE_API
const ApiKey = import.meta.env.VITE_API_KEY

const Home = () => {

  const [TopMovies, setTopMovies] = useState([]) //array vazio porque vai receber uma lista

  //async(url) porque espera uma url da API
  const GetTopRatedMovies = async(url) => {

    const Res = await fetch(url) //resposta baseada no fetch para a url
    const Data = await Res.json() //transforma os dados dos filmes recebidos num array de objectos js

    setTopMovies(Data.results)
  }

  useEffect(() => { //para chamar a função

    const TopRatedUrl = `${MoviesUrl}top_rated?${ApiKey}`//cria a url para pesquisar os top rated filmes usando a url que temos para movies, acrescentando top-rated? que faz a pesquisa e por fim a nossa key

    GetTopRatedMovies(TopRatedUrl)

  }, []) //[] para executar a função de cada vez que a página for carregada. se colocasse algum elemento dento do [] significava que a funçao era executada de cada vez que essa dependencia fosse modificada

  return (
    <div className='Container'>
        <h2 className="Title">Melhores Filmes:</h2>
        <div className="MoviesContainer">
            {TopMovies.length === 0 && <p>Carregando...</p>}
            {TopMovies.length > 0 && TopMovies.map((Movie) =><MovieCard key={Movie.id} Movie={Movie}/> //faz um mapa dos filmes a receber da API e cada filme é um movie no mapa. aqui apresentamos essa lista por título..... movie={movie} porque a propriedade movie em MovieCard recebe movie

        )}
        </div>
        
    </div>
  )
}

export default Home