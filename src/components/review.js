import { useEffect, useContext, useState } from 'react'
import { UserContext } from '../context/usercontext'
import { Box } from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import axios from 'axios'

const Review = props => {
    const { userState } = useContext(UserContext)
    const [user, setUser] = userState
    const [value, setValue] = useState(0)

    const handleChange = () => {
        console.log('hi');
    }

    return(
        <div className='rating'>
            <Box component='fieldset' mb={3} borderColor="transparent">
                <Rating
                    color='white'
                    size='large'
                    name='pristine'
                    value={value}
                    onChange={(e, newValue) => {
                        setValue(newValue)
                        handleChange()
                    }}
                    style={{
                        backgroundColor: 'white'
                    }}
                />
            </Box>
        </div>
    )
}

export default Review