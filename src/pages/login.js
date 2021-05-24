import TextField from '@material-ui/core/TextField'
import { useState, useContext } from 'react'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import { UserContext } from '../context/usercontext'

const Login = props => {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const { fetchUser } = useContext(UserContext)

    const Alert = (props) => {
        return <MuiAlert elevation={6} variant='filled' {...props} />
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setError(false)
    }

    const handleSubmit = async e => {
        e.preventDefault()
        setError(false)
        const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/login`, {
            email: email,
            password: password
        })
        if(res.data.Login == 'Unauthorized') {
            setError(true)
            setEmail('')
            setPassword('')
        } else if(res.data.user) {
            localStorage.setItem('userId', res.data.token)
            history.push('/films')
            await fetchUser()
        }
    }

    return(
        <div className='logincontainer'>
            <Snackbar open={error} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity='error'>
                    Invalid email or password!
                </Alert>
            </Snackbar>
            <form className='loginform' onSubmit={handleSubmit}>
                <h1 className='logintitle'>LOGIN</h1>
                <Box m={1.5} />
                <TextField
                    id='email'
                    label='Email'
                    required
                    variant='filled'
                    style={{
                        background: 'white',
                        width: '50ch'
                    }}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <Box m={1.5} />
                <TextField
                    id='password'
                    label='Password'
                    required
                    variant='filled'
                    type='password'
                    style={{
                        background: 'white',
                        width: '50ch'
                    }}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
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
                    >SUBMIT</Button>
                <Box m={1.5} />
                <Button
                    variant='contained'
                    color='secondary'
                    style={{
                        height: '140%',
                        width: '100%',
                        backgroundColor: 'red'
                    }}
                    onClick={() => (
                        history.push('/signup')
                    )}
                >New User</Button>
            </form>
        </div>
    )
}

export default Login