import axios from 'axios'
import { useState, useEffect, useContext} from 'react'
import { UserContext } from '../context/usercontext'
import { Link } from 'react-router-dom'


const Films = props => {
    const { userState } = useContext(UserContext)
    const [user, setUser] = userState
    const [movies, setMovies] = useState([])

    const getAllMovies = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/movies`).then(res => {
            setMovies(res.data.Movies)
            console.log(res);
        })
    }

    useEffect(getAllMovies, [])

    return(
        <div className='filmscontainer'>
            <div className='films'>
                {movies.map((movie, i) => (
                    <div className='movie' key={i}>
                        <Link to={`/movie/${movie.id}`}>
                            <img className='moviecover' src={movie.movie_cover} />
                            <h2 className='movietitle'>{movie.title}</h2>
                            <p className='moviedesc'>{movie.description}</p>
                            <p className='movierating'>Rating: {movie.rating === 0 ? 'N/A': movie.rating}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Films