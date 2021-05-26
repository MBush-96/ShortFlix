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
        <div className='movieplayscreen'>
            <div className='movieframe'>
                <iframe className='moviepagescreen'
                    width="80%" 
                    height="700vh" 
                    src={movie.movie_src}
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen='True'>
                </iframe>
            <div className='movieinfo'>
                <h2 className='moviepagetitle'>{movie.title}</h2>
                <Review id={movie.id}/>
            </div>
            </div>
        </div>
    )
}

export default PlayFilm