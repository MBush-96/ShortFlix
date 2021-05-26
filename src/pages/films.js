import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import RatingStars from '../components/rating'

const Films = props => {
    const [movies, setMovies] = useState([])
    const [tags, setTags] = useState([])

    const getAllMovies = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/movies`).then(res => {
            setMovies(res.data.Movies)
            console.log(res);
        })
    }

    const getAllTags = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/tag/all`).then(res => {
            console.log(res);
            setTags(res.data.Tags)
        })
    }

    useEffect(() => {
        getAllMovies()
        getAllTags()
    }, [])

    return(
        <div className='filmscontainer'>
            <div className='films'>
                {movies.map((movie, i) => {
                    let movie_tag = []
                    tags.forEach(tag => {
                        if(tag.movie_id === movie.id) {
                            movie_tag.push(tag.genre)
                        }
                    })
                    return(
                        <div className='movie' key={i}>
                            <Link to={`/movie/${movie.id}`}>
                                <img className='moviecover' src={movie.movie_cover} alt='movie Cover'/>
                                <h2 className='movietitle'>{movie.title}</h2>
                                <div className='tagcontainer'>
                                {movie_tag.map((tag, i) => (
                                        <p className='tag' key={i}>{tag}</p>
                                        ))}
                                </div>
                                <p className='moviedesc'>{movie.description}</p>
                                <p className='movierating'><RatingStars movie_id={movie.id} /></p>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Films