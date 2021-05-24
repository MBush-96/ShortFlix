import { useEffect, useContext, useState } from 'react'
import { UserContext } from '../context/usercontext'
import { TextField, Button, Box } from '@material-ui/core'
import axios from 'axios'

const Review = props => {
    const { userState } = useContext(UserContext)
    const [user, setUser] = userState
    const [content, setContent] = useState('')

    const handleSubmit = async e => {
        e.preventDefault()
        const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/review/new`, {
            user_id: user.id,
            review_body: content,
            movie_id: props.movie
        })
        console.log(res);
        setContent('')
    }

    const getAllReviewsForMovie = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/reviews/${props.movie}`).then(res => {
            console.log(res);
        })
    }

    useEffect(getAllReviewsForMovie, [])

    return(
        <div>
            <form onSubmit={handleSubmit} autoComplete="off" className='reviewform'>
                <TextField
                    id='filled-multiline-static'
                    label='Review'
                    multiline
                    rows={7}
                    defaultValue=""
                    variant='filled'
                    style={{
                        background: 'white',
                        width: '100ch'
                    }}
                    value={content}
                    onChange={e => setContent(e.target.value)}
                />
                <Box m={1.5} />
                <Button
                    type='submit'
                    variant='contained'
                    color='secondary'
                    style={{
                        height: "100%",
                        width: '80%',
                        background: 'red'
                    }}
                >Submit</Button>
            </form>
        </div>
    )
}

export default Review