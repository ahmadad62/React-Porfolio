import { Box } from '@mui/material';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { info } from "../info/info";
import { Typography } from '@mui/material';
import './About.scss'
import parse from 'html-react-parser';
import { useContext } from 'react';
import { DarkModeContext } from '../context/darkModeContext';

const About = () => {
    const [isLogin, setIsLogin] = useState(true)
    const { darkMode } = useContext(DarkModeContext);
    // if(!isLogin) {
    //     return  <Navigate to="/"/>
    // }
    return (
        isLogin ?
            <div className='about'>
                <Box
                    component={'main'}
                    width={'auto'}
                    margin={'2rem'}>
                    <Box margin={'2rem'}>
                        <h2>
                            <span
                                style={{
                                    background: info.gradient,
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}>
                                {info.bio.en[0]}
                            </span>
                        </h2>
                        <Typography
                            color={darkMode ? 'dark' : 'white'}
                            align="left"
                            variant="body1"
                            width="100%"
                            component="p">
                            {parse(info.bio.en[1])}
                        </Typography>
                    </Box>
                </Box>
                <button onClick={() => setIsLogin(false)}>Logout</button>
            </div> : <Navigate to="/" />
    );
}

export default About;
