import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {BsGraphUp, BsWallet2, BsHourglassSplit, BsFillFileEarmarkTextFill} from 'react-icons/bs'
import './Movie.css'
import MovieCard from '../components/MovieCard'

const MoviesUrl = import.meta.env.VITE_API
const ApiKey = import.meta.env.VITE_API_KEY

const Movie = () => {

  const {id} = useParams() //recebe o id que está na url
  const [Movie, setMovie] = useState(null)

  const GetMovie = async(url) => {

    const Res = await fetch(url) 
    const Data = await Res.json() 

    setMovie(Data)
  }

  const FormatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency:"USD"
    })
  }

  useEffect(() => { 

    const MovieUrl = `${MoviesUrl}${id}?${ApiKey}`

    GetMovie(MovieUrl)
  }, [])
 

  return (
    <div className='MoviePage'>
      {Movie && (
        <> 
          <MovieCard Movie={Movie} ShowLink={false}/>
          <p className="TagLine">{Movie.tagline}</p>
          <div className="Info">
            <h3>
              <BsWallet2/> Orçamento:
            </h3>
            <p>{FormatCurrency(Movie.budget)}</p>
          </div>
          <div className="Info">
            <h3>
              <BsGraphUp/> Receita:
            </h3>
            <p>{FormatCurrency(Movie.revenue)}</p>
          </div>
          <div className="Info">
            <h3>
              <BsHourglassSplit/> Duração:
            </h3>
            <p>{Movie.runtime} minutos</p>
          </div>
          <div className="Info Description">
            <h3>
              <BsFillFileEarmarkTextFill/> Descrição:
            </h3>
            <p>{Movie.overview}</p>
            
          </div>
        </>
      )}
    </div>
  )
}

export default Movie