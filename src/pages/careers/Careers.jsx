import { Link, useLoaderData } from "react-router-dom";
import * as React from 'react';
import CardCover from '@mui/joy/CardCover';
// import CardContent from '@mui/joy/CardContent';
// import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
// import Card from '@mui/joy/Card';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Portfolio.scss'

function Careers() {
    const portfolio = useLoaderData()

    return (
        <div className='portfolio'>

            <Box
                component="div"
                sx={{
                    display: 'flex',
                    gap: 2, flexWrap: 'wrap',
                    p: '10px',
                    m: '10px'
                }}
            >
                {portfolio?.map(portfolio=>(
                    <>
                <Card sx={{ maxWidth: 345 }} key={portfolio.id}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="https://avatars.githubusercontent.com/u/93351358?v=4"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {portfolio.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        
                <Link to={portfolio.id.toString()} key={portfolio.id}><Button size="small">Learn More</Button></Link>
                    </CardActions>
                </Card>
            
                </>
            ))}
            </Box>

        </div>
    );
}

export default Careers;

//loader function



export const careersLoader = async () => {
    const res = await fetch('http://localhost:8000/portfolio')

    if (!res.ok) {
        throw Error('Could not fetch the portfolio!')
    }

    return res.json()
}