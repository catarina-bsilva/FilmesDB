import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Movie from './pages/Movie'
import Home from './pages/Home'
import Search from './pages/Search'
import Favorites from './pages/Favorites'
import { useState, useContext } from 'react'
import { favoriteContext } from './context'

function AppProvider ({children}){
  const [favoriteState, setFavoriteState] = useState([
    {
      "id": 680,
      "Poster": "https://image.tmdb.org/t/p/w500//d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
      "Name": "Pulp Fiction",
      "Pontuacao": 8.491,
      "IsFavorite": true,
      "Citacao": "Just because you are a character doesn't mean you have character.",
      "Orcamento": 8000000,
      "Receita": 214179088,
      "Duracao": 154,
      "Descricao": "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time."
    },
    {
      "id": 122,
      "Poster": "https://image.tmdb.org/t/p/w500//rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
      "Name": "The Lord of the Rings: The Return of the King",
      "Pontuacao": 8.474,
      "IsFavorite": true,
      "Citacao": "The eye of the enemy is moving.",
      "Orcamento": 94000000,
      "Receita": 1118888979,
      "Duracao": 201,
      "Descricao": "Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron's forces. Meanwhile, Frodo and Sam take the ring closer to the heart of Mordor, the dark lord's realm."
    },
    {
      "id": 496243,
      "Poster": "https://image.tmdb.org/t/p/w500//7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
      "Name": "Parasite",
      "Pontuacao": 8.516,
      "IsFavorite": true,
      "Citacao": "Act like you own the place.",
      "Orcamento": 11363000,
      "Receita": 257591776,
      "Duracao": 133,
      "Descricao": "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident."
    },
    {
      "id": 13,
      "Poster": "https://image.tmdb.org/t/p/w500//arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
      "Name": "Forrest Gump",
      "Pontuacao": 8.481,
      "IsFavorite": true,
      "Citacao": "The world will never be the same once you've seen it through the eyes of Forrest Gump.",
      "Orcamento": 55000000,
      "Receita": 677387716,
      "Duracao": 142,
      "Descricao": "A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case, far exceeding what anyone imagined he could do. But despite all he has achieved, his one true love eludes him."
    },
    {
      "id": 19404,
      "Poster": "https://image.tmdb.org/t/p/w500//ktejodbcdCPXbMMdnpI9BUxW6O8.jpg",
      "Name": "Dilwale Dulhania Le Jayenge",
      "Pontuacao": 8.571,
      "IsFavorite": true,
      "Citacao": "Come Fall In love, All Over Again..",
      "Orcamento": 13200000,
      "Receita": 100000000,
      "Duracao": 190,
      "Descricao": "Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga."
    }
  ])
  const [Favorite, setFavorite] = useState(false)

  return (
    <favoriteContext.Provider value={{favoriteState, setFavoriteState, Favorite, setFavorite}}>
      {children}
    </favoriteContext.Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
    <React.StrictMode>
    <BrowserRouter basename="/FilmesDB">
      <Routes>
        <Route element={<App/>}>
          <Route path='/' element={<Home/>} />
          <Route path='/Favorites' element={<Favorites/>} />
          <Route path='/Movie/:id' element={<Movie/>} />
          <Route path='/Search' element={<Search/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </React.StrictMode>
  </AppProvider>

)
