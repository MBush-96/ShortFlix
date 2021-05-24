import { Link } from  'react-router-dom'
import Button from '@material-ui/core/Button'

const Nav = props => {
    return(
        <div className='homenav'>
            <Link to='/' className='t'>
                <h1 className='title'>SHORTFLIX</h1>
            </Link>
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
        </div>
    )
}

export default Nav