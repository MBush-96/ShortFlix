import axios from 'axios'
import { useEffect, useState } from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const RatingStars = props => {
    const [ratingValue, setRatingValue] = useState(0)

    const getRating = () => {
        try {
            axios.get(`${process.env.REACT_APP_BACKEND_URL}/rating/movies/${props.movie_id}`).then(res => {
                console.log(res);
                setRatingValue(res.data.average)
            })
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(getRating, [])

    return(
        <div>
            {ratingValue === 0 ?
                <></>
            :
                <Box component="span" mb={3} borderColor='transparent'>
                    <Rating name='read-only' value={ratingValue} readOnly />
                </Box>
            }
        </div>
    )
}

export default RatingStars
