import { Box } from '@mui/material';
import { info } from "../info/info";
import { Typography } from '@mui/material';
import './About.scss'
import parse from 'html-react-parser';
import { useContext } from 'react';
import { DarkModeContext } from '../context/darkModeContext';

const About = () => {
    const { darkMode } = useContext(DarkModeContext);

    return (
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
            </div> 
    );
}

export default About;
