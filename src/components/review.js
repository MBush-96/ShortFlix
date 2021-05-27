import { useEffect, useContext, useState } from 'react'
import { UserContext } from '../context/usercontext'
import { Box } from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import axios from 'axios'

const Review = props => {
    const { userState } = useContext(UserContext)
    const [user, setUser] = userState
    const [value, setValue] = useState(0)
    const [userHasRated, setUserHasRated] = useState(false)
    const [ratedValue, setRatedValue] = useState(0)

    console.log(props.id);
    // Check if user has already rated a movie
    const getPreviousRating = () => {
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/rating/${user.id}`).then(res => {
            console.log(res);
            for(let i of res.data.Rating) {
                if(i['movie_id'] === props.id) {
                    setRatedValue(i['rating'])
                    setUserHasRated(true)
                    console.log(i['movie_id'], 'rating');
                }
            }
        })
    }

    // handle rating icon changing
    const handleChange = () => {
        if(userHasRated) {
            axios.put(`${process.env.REACT_APP_BACKEND_URL}/rating/movies/update`, {
                user_id: user.id,
                movie_id: props.id,
                rating: value
            })
        } 
        if (userHasRated === false) {
            axios.post(`${process.env.REACT_APP_BACKEND_URL}/rating/movies/${props.id}`, {
                movie_id: props.id,
                rating: value,
                user_id: user.id
            })
        }
    }

    useEffect(getPreviousRating, [props])
    useEffect(handleChange, [value])

    return(
        <div className='rating'>
            <Box component='fieldset' mb={ratedValue} borderColor="transparent">
                <Rating
                    color='white'
                    size='medium'
                    name='simple-controlled'
                    value={value}
                    onChange={(e, newValue) => {
                        setValue(newValue)
                    }}
                    style={{
                        padding: '0px',
                        margin: '0',
                        width: '20%'
                    }}
                />
            </Box>
        </div>
    )
}

export default Review