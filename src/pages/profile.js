import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/usercontext'
import { TextField, Box, Button } from '@material-ui/core'
import axios from 'axios'

const Profile = props => {
    const { userState } = useContext(UserContext)
    const [user, setUser] = userState
    const [cPassword, setCPassword] = useState('')
    const [nPassword, setNPassword] = useState('')
    const [confirmNPassword, setConfirmNPassword] = useState('')
    const [error, setError] = useState(false)

    const handleSubmit = async e => {
        e.preventDefault()
        if(confirmNPassword !== nPassword) {
            setError(true)
        } else if (confirmNPassword === nPassword) {
            setError(false)
            const res = axios.put(`${process.env.REACT_APP_BACKEND_URL}/user/update/${user.id}`, {
                cPassword: cPassword,
                password: nPassword
            })
            console.log(res);
        }
        setCPassword('')
        setNPassword('')
        setConfirmNPassword('')
    }

    useEffect(() => {
        console.log('pass dosent match');
    }, [error])

    return(
        <div className='profilecontainer'>
            <h1 className='pfwhite'>Welcome, {user.username}</h1>
            <form onSubmit={handleSubmit} className='pform'>
                <h2 className='pfwhite'>Change Password</h2>
                <TextField
                    id='cp'
                    type='password'
                    label='Current Password'
                    required
                    value={cPassword}
                    variant='filled'
                    style={{
                        background: 'white',
                        width: '50ch'
                    }}
                    onChange={e => setCPassword(e.target.value)}
                />

                <Box m={1.5} />

                <TextField
                    id='np'
                    type='password'
                    label='New Password'
                    required
                    value={nPassword}
                    variant='filled'
                    style={{
                        background: 'white',
                        width: '50ch'
                    }}
                    onChange={e => {
                        setNPassword(e.target.value)
                    }}
                />

                <Box m={1.5} />
                {error ?
                    <TextField
                        id='np'
                        error
                        type='password'
                        label='Confirm New Password'
                        required
                        value={confirmNPassword}
                        variant='filled'
                        style={{
                            background: 'white',
                            width: '50ch'
                        }}
                        onChange={e => {setConfirmNPassword(e.target.value)}}
                    />
                
            
                :
                    <TextField
                        id='np'
                        type='password'
                        label='Confirm New Password'
                        required
                        value={confirmNPassword}
                        variant='filled'
                        style={{
                            background: 'white',
                            width: '50ch'
                        }}
                        onChange={e => {
                            setConfirmNPassword(e.target.value)
                            if (nPassword === confirmNPassword) {
                                setError(false)
                                console.log('false');
                            } else if (nPassword !== confirmNPassword) {
                                setError(true)
                                console.log('true');
                            }
                        }}
                    />
                }

                <Box m={1.5} />

                <Button
                    type='submit'
                    variant='contained'
                    color='secondary'
                    style={{
                        height: '100%',
                        width: '50%',
                        backgroundColor: 'red'
                    }}
                >Submit</Button>
            </form>
        </div>
    )
}

export default Profile