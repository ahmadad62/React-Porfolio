import { Link, useLoaderData } from "react-router-dom";
import Box from '@mui/joy/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {info} from '../../info/info'
import './Portfolio.scss'

function Portfolio() {
     const portfolio = useLoaderData()
// const portfolio= info.portfolio  
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
                {portfolio?.map(portfolio => (
                    <>
                        <Card sx={{ maxWidth: 345 }} key={portfolio.id}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image={portfolio.image}
                                title={portfolio.title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {portfolio.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {portfolio.details}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>

                                <Link to={portfolio.id.toString()} key={portfolio.id}>
                                    <Button size="small">Learn More</Button>
                                </Link>
                            </CardActions>
                        </Card>

                    </>
                ))}
            </Box>

        </div>
    );
}

export default Portfolio;



//loader function



 export const portfolioLoader = async () => {
//     const res = await fetch('http://localhost:8000/portfolio')

//     if (!res.ok) {
//         throw Error('Could not fetch the portfolio!')
//     }

//     return res.json()
const portfolio= info.portfolio

return portfolio
 }


