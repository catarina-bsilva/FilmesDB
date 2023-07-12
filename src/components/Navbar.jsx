import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BiSearchAlt2 } from "react-icons/bi" 
import { MdMovieFilter } from 'react-icons/md'
import "./Navbar.css"

const Navbar = () => {

  const [Search, setSearch] = useState("")

  const Navigate = useNavigate() //depois de dar enter na pesquisa, redireciona para a página de busca

  const HandleSubmit = (e) => {
    e.preventDefault()
    if(!Search) return

    Navigate(`/search?q=${Search}`)
    setSearch("")
  }

  return (
    <nav id="Navbar">
      <h3><Link to="/Favorites">Favoritos</Link></h3>
      <h2>
          <Link to="/"><MdMovieFilter/>FilmesDB</Link>
      </h2>

      <form onSubmit={HandleSubmit}>
          <input type="text" placeholder='Busque um filme' onChange={(e) => setSearch(e.target.value)}
          value={Search} //limpa o campo depois de pesquisar porque, depois, Search volta a valor vazio 
          />
          <button type='submit' // se criasse input  submit em vez de button, o botão só poderia levar texto. sendo button pode levar icon p.e 
          > <BiSearchAlt2/> </button>
      </form>
    </nav>
  )
}

export default Navbar