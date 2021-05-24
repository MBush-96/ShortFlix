import TextField from '@material-ui/core/TextField'
import { useState } from 'react'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

const Signup = props => {
    const history = useHistory()
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [passwordVerify, setPasswordVerify] = useState('')
    const [error, setError] = useState(false)

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
        setEmail(props.userEmail)
        const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/signup`, {
            username: userName,
            email: email,
            password: password
        })
        if(res.data.error) {
            console.log(res);
            setError(true) 
        } else if (!res.data.error) {
            console.log(res);
            history.push('/')
        }
    }

    return(
        <div className='signupcontainer'>
            <Snackbar open={error} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity='error'>
                    Username or email is already in use!
                </Alert>
            </Snackbar>
            <form className='signupform' onSubmit={handleSubmit}>
                <h1 className='signuptitle'>Sign Up</h1>
                <TextField
                    id='username' 
                    label={error ? 'error' : 'Username' }
                    {...error ? error : null } 
                    required
                    variant='filled'
                    style={{ 
                        background: 'white',
                        width: '50ch'
                    }}
                    onChange={e => setUserName(e.target.value)}
                />
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
                    defaultValue={props.userEmail}
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
                    onChange={e => setPassword(e.target.value)}
                />
                <Box m={1.5} />
                <TextField
                    type='password'
                    id='passwordverify'
                    label='Password Again'
                    required
                    variant='filled'
                    style={{
                        background: 'white',
                        width: '50ch'
                    }}
                    onChange={e => setPasswordVerify(e.target.value)}
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
            </form>
        </div>
    )
}

export default Signup