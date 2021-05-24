import { useState } from 'react'
import { TextField, Button, Box } from '@material-ui/core'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const AddFilm = props => {
    const history = useHistory()
    const [movieTitle, setMovieTitle] = useState('')
    const [movieDesc, setMovieDesc] = useState('')
    const [movieCover, setMovieCover] = useState('')
    const [movieSrc, setMovieSrc] = useState('')

    const handleSubmit = async e => {
        e.preventDefault()
        const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/movies/create`, {
            title: movieTitle,
            description: movieDesc,
            movie_src: movieSrc,
            movie_cover: movieCover,
            rating: 0
        })
        console.log(res);
        history.push('/films')
        setMovieTitle('')
        setMovieDesc('')
        setMovieCover('')
        setMovieSrc('')
    }

    return(
        <div className='newmovieformcontainer'>
            <h1 className='addfilmtitle'>Add a new film</h1>
            <form className='newmovieform' onSubmit={handleSubmit}>
                <TextField
                    id='title'
                    label='Movie Title'
                    required
                    value={movieTitle}
                    variant='filled'
                    style={{
                        background: 'white',
                        width: '50ch'
                    }}
                    onChange={e => setMovieTitle(e.target.value)}
                />

                <Box m={1.5} />
                
                <TextField
                    id='desc'
                    label='Movie Description'
                    required
                    value={movieDesc}
                    variant='filled'
                    style={{
                        background: 'white',
                        width: '50ch'
                    }}
                    onChange={e => setMovieDesc(e.target.value)}
                />
                
                <Box m={1.5} />
                
                <TextField
                    id='movieSrc'
                    label='Movie Link'
                    required
                    value={movieSrc}
                    variant='filled'
                    style={{
                        background: 'white',
                        width: '50ch'
                    }}
                    onChange={e => setMovieSrc(e.target.value)}
                />

                <Box m={1.5} />
                
                <TextField
                    id='coverImg'
                    label='Movie Cover Image'
                    required
                    value={movieCover}
                    variant='filled'
                    style={{
                        background: 'white',
                        width: '50ch'
                    }}
                    onChange={e => setMovieCover(e.target.value)}
                />

                <Box m={1.5} />

                <Button 
                    type='submit'
                    variant='contained'
                    color='secondary'
                    style={{
                        maxHeight: '140%',
                        maxWidth: '100%',
                        backgroundColor: 'red'
                    }}
                >Add Film</Button>
            </form>
        </div>
    )
}

export default AddFilm