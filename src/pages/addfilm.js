import { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { TextField, Button, Box, FormControl, Select, InputLabel } from '@material-ui/core'

const AddFilm = props => {
    const history = useHistory()
    const [movieTitle, setMovieTitle] = useState('')
    const [movieDesc, setMovieDesc] = useState('')
    const [movieCover, setMovieCover] = useState('')
    const [movieSrc, setMovieSrc] = useState('')
    const [genre, setGenre] = useState('')

    const handleSubmit = async e => {
        e.preventDefault()
        if(movieSrc.length() === 11){
            const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/movies/create`, {
                title: movieTitle,
                description: movieDesc,
                movie_src: movieSrc,
                movie_cover: movieCover,
                rating: 0
            })
    
            const resTag = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/tag`, {
                genre: genre,
                movie_id: res.data.Created_Movie.id
            })
            console.log(resTag);
            console.log(res);
        }


        history.push('/films')
        setMovieTitle('')
        setMovieDesc('')
        setMovieCover('')
        setMovieSrc('')
        setGenre('')
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
                <img src='https://i.imgur.com/OsLU2J0.png' margin-top='10px' width='85%' alt='img' />

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
                
                <FormControl variant='filled'>
                    <InputLabel htmlfor='genres'>Genre</InputLabel>
                    <Select
                        native
                        value={genre}
                        onChange={e => setGenre(e.target.value)}
                        inputProps={{
                            genre: 'Genre',
                            id: 'genres'
                        }}
                        style={{
                            background: 'white',
                            width: '30ch'
                        }}
                        required
                    >
                        <option aria-label="None" value="" />
                        <option value={'Thriller'}>Thriller</option>
                        <option value={'Comedy'}>Comedy</option>
                        <option value={'Drama'}>Drama</option>
                        <option value={'Horror'}>Horror</option>
                        <option value={'Adventure'}>Adventure</option>
                        <option value={'Sci-Fi'}>Sci-Fi</option>
                        <option value={'Action'}>Action</option>
                        <option value={'Romance'}>Romance</option>
                    </Select>
                </FormControl>

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