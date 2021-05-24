import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import React from 'react'
import { useHistory } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Home = props => {
    AOS.init()
    const history = useHistory()

    const handleSubmit = e => {
        e.preventDefault()
        history.push('/signup')    
    }

    return(
        <div>
            <div className='homeheader'>
                <div className='middlecontdesc'>
                    <p className='signuphp'>All the short movies, fan films, and movie clips you need.<br />
                    For <strong>free.</strong></p>
                    <form onSubmit={handleSubmit} autoComplete="off" className='getstartedform'>
                        <TextField 
                            style={{ 
                                background: 'white',
                                width: '35ch',
                            }} 
                            id='outlined-basic' 
                            label='Email' 
                            required
                            type='email'
                            onChange={e => props.setUserEmail(e.target.value)}
                        />
                        <Box m={2} />
                            <Button 
                            type='submit'
                            variant='contained'
                            color='secondary'
                            style={{
                                maxHeight: '100%',
                                maxWidth: '100%',
                                backgroundColor: 'red'
                            }}
                        >Get Started</Button>
                    </form>
                </div>
            </div>
            <div className='siteperkscont'>
                <div className='perkone' data-aos="fade-up">
                    <div className='spacer'></div>
                    <div className='perkonecontent'>
                        <p className='p1p'>Watch high quality short movies and fan films.
                        </p>
                        <img className='overlord' src='https://i.imgur.com/mXctcYY.jpg' />
                    </div>
                </div>
                <div className='perktwo' data-aos="fade-up">
                    <div className='perktwocontent'>
                        <p className='p2p'>Upload your own short movies, or fan films.</p>
                    </div>
                    <div className='spacer'></div>
                </div>
                <div className='perkthree' data-aos='fade-up'>
                    <div className='spacer'></div>
                    <div className='perkthreecontent'>
                        <p className='p3p'>Multiple genres to chose from.</p>
                    </div>
                </div>
                <div className='perkfour' data-aos='fade-up'>
                    <div className='perkfourcontent'>
                    <img className='free' src='https://i.imgur.com/dk86e27.png' />
                        <p className='p4p'>Completely free simply signup and start watching.</p>
                    </div>
                    <div className='spacer'></div>
                </div>
                <div className='perkfive' data-aos='fade-up'>
                    <div className='spacer'></div>
                    <div className='perkfivecontent'>
                        <p className='p5p'>Leave reviews and ratings for your favorite films.</p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Home