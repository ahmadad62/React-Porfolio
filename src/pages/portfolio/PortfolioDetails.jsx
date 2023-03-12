import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import {marked} from 'marked';
import {info} from '../../info/info'
import './PortfolioDetails.css'

export default function PortfolioDetails() {
    const {id}=useParams()
    const { readmeHtml } = useLoaderData();
    return (
        <div className='portfolio-details'>
            
            <div dangerouslySetInnerHTML={{ __html: readmeHtml }} />

        </div>
    );
}

//loader

export const portfolioDetailsLoader = async ({params}) => {
const {id}=params;
    const portfolio= info.portfolio
    console.log(id);
    
    const res = await fetch(`https://api.github.com/repos/ahmadad62/${portfolio[id-1].repo}/readme`);
console.log(portfolio.repo);

  if (!res.ok) {
    throw Error('Could not find that portfolio');
  }

  const { content } = await res.json();
  const readmeContent = atob(content); // Decode base64-encoded content
  const readmeHtml = marked(readmeContent); // Convert Markdown to HTML

  return { readmeHtml };


}
