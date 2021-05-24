import axios from "axios";
import { useState, useEffect } from 'react'
import Review from '../components/review'

const PlayFilm = props => {
    const [movie, setMovie] = useState({})

    const fetchMovie = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/movies/${props.rProps}`).then(res => {
            setMovie(res.data.Movie)
        })
    }

    useEffect(fetchMovie, [])

    return(
        <div>
            <div className='movieframe'>
                <iframe 
                    width="80%" 
                    height="700vh" 
                    src={movie.movie_src}
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullscreen='True'>
                </iframe>
            <div className='movieinfo'>
                <h2 className='moviepagetitle'>{movie.title}</h2>
            </div>
            </div>
            <div className='reviews'>
                <Review movie={props.rProps} />
            </div>
        </div>
    )
}

export default PlayFilm