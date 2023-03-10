import React from 'react';
import Style from './Home.module.scss';
import { Box } from "@mui/material";
import { info } from "../info/info";


const Home = () => {
    return (
        <div className='home'>
            <Box
                component={'main'}
                display={'flex'}
                flexDirection={{ xs: 'column', md: 'row' }}
                alignItems={'center'}
                justifyContent={'center'}
                minHeight={'calc(100vh - 175px)'}>
                <Box
                    alt={'image of developer'}
                    style={{ background: info.gradient }}
                    component={'img'} src="https://avatars.githubusercontent.com/u/93351358?v=4"
                    width={{ xs: '35vh', md: '40vh' }}
                    height={{ xs: '35vh', md: '40vh' }}
                    borderRadius={'50%'} p={'0.75rem'}
                    mb={{ xs: '1rem', sm: 0 }}
                    mr={{ xs: 0, md: '2rem' }} />
                <Box>
                    <h1>Hi, I'm <span style={{ background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                        {info.firstName}
                    </span>
                        <span className={Style.hand}>
                            🤚
                        </span>
                    </h1>
                    <h2>I'm {info.position}.</h2>
                    <Box component={'ul'} p={'0.8rem'}>
                        {info.miniBio.map((bio, index) => (
                            <Box
                                key={index}
                                component={'li'}
                                fontSize={'1rem'}
                                lineHeight={1.5}
                                style={{ cursor: 'default' }}>
                                <Box
                                    component={'span'}
                                    aria-label="cheese"
                                    role="img"
                                    mr={{ xs: '0.5rem', md: '1rem' }}
                                    fontSize={'1.5rem'}>
                                    {bio.emoji}
                                </Box>
                                {bio.text}
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </div>
    );
}

export default Home;
