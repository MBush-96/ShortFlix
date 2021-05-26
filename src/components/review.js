import { useEffect, useContext, useState } from 'react'
import { UserContext } from '../context/usercontext'
import { Box } from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import axios from 'axios'

const Review = props => {
    const { userState } = useContext(UserContext)
    const [user, setUser] = userState
    const [value, setValue] = useState(null)
    const [userHasRated, setUserHasRated] = useState(false)
    const [ratedValue, setRatedValue] = useState(0)

    // Check if user has already rated a movie
    const getPreviousRating = () => {
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/rating/${user.id}`).then(res => {
            console.log(res);
            for(let i of res.data.Rating) {
                if(i['movie_id'] === props.id) {
                    setRatedValue(i['rating'])
                    setUserHasRated(true)
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
        } else if (!userHasRated) {
            axios.post(`${process.env.REACT_APP_BACKEND_URL}/rating/movies/${props.id}`, {
                movie_id: props.id,
                rating: value,
                user_id: user.id
            })
        }
    }

    useEffect(handleChange, [value])
    useEffect(getPreviousRating, [user])

    return(
        <div className='rating'>
            <Box component='fieldset' mb={ratedValue} borderColor="transparent">
                <Rating
                    color='white'
                    size='medium'
                    name='simple-controlled'
                    value={value}
                    onChange={(e, newValue) => {
                        console.log(newValue);
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