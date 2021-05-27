import { Link, useHistory } from  'react-router-dom'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { useState, useContext } from 'react'
import { UserContext } from '../context/usercontext'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const Nav = props => {
    const history = useHistory();
    const { userState } = useContext(UserContext)
    const [user, setUser] = userState
    const [anchorEle, setAnchorEle] = useState(null)
    const matches = useMediaQuery(`(max-width:600px)`)

    const handleClick = e => {
        setAnchorEle(e.currentTarget)
    }

    const handleClose = () => {
        setAnchorEle(null)
    }

    const handleLogout = () => {
        localStorage.removeItem('userId')
        setUser({})
        setAnchorEle(null)
        history.push('/')
    }

    console.log(matches);
 
    return(
        <div className='homenav'>
            <Link to='/' className='title'>
                <h1 className='title'>SHORTFLIX</h1>
            </Link>

            <Menu
                id='menuprofile'
                anchorEl={anchorEle}
                keepMounted
                open={Boolean(anchorEle)}
                onClose={handleClose}
            >
                <MenuItem><Link to='/profile' ><p className='undecorate'>Profile</p></Link></MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
            {localStorage.getItem('userId') ? 
                <div className='nav'>
                    <Button
                        variant='contained'
                        color='secondary'
                        style={{
                            width: matches ? '20%': '10%',
                            height: '50%',
                            backgroundColor: 'red',
                            textDecoration: 'none'
                        }}
                        onClick={handleClick}>
                        {user.username}
                    </Button>
                    <Box m={1.5} />
                        <Button
                        variant='contained'
                        color='secondary'
                        style={{
                            width: matches ? '52%': '12%',
                            maxHeight: '50%',
                            backgroundColor: 'red',
                            textDecoration: 'none'
                        }}
                        onClick={() => {
                            history.push('/newfilm')
                        }}>Add Film</Button>    
                </div>
            :
                <Link to='/login' className='t'>
                    <Button 
                        variant='contained' 
                        color='secondary' 
                        style={{
                            maxWidth: '10%',
                            maxHeight: '50%',
                            backgroundColor: 'red',
                            textDecoration: 'none'
                        }}>Login</Button>
                </Link>
            }
        </div>
    )
}

export default Nav