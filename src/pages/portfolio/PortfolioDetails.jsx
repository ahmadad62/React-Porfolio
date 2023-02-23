import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

export default function PortfolioDetails() {
    const { id } = useParams()
    const portfolio = useLoaderData()
    return (
        <div className='portfolio-details'>
            <h2>Portfolio Details for : {portfolio.title}</h2>
            <p>Starting Salary : {portfolio.salary}</p>
            <p>Location: {portfolio.location}</p>
            <div className="details">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, deleniti blanditiis laborum quo exercitationem voluptate est modi iste at distinctio.
                </p>
            </div>

        </div>
    );
}

//loader

export const portfolioDetailsLoader = async ({ params }) => {
    const { id } = params
    const res = await fetch(`http://localhost:8000/portfolio/${id}`)

    if(!res.ok){
        throw Error('Could not find that portfolio')
    }
    
    return res.json()
}
