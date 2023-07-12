import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Movie from './pages/Movie'
import Home from './pages/Home'
import Search from './pages/Search'
import Favorites from './pages/Favorites'

ReactDOM.createRoot(document.getElementById('root')).render(
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
  </React.StrictMode>,

)
