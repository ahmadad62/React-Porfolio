import { Link, useRouteError } from 'react-router-dom';

const PortfolioError = () => {

    const error=useRouteError()

    return (
        <div>
           <h2>Error</h2> 
           <p>{error.message}</p>
           <Link to="/">Back to Home</Link>
        </div>
    );
}

export default PortfolioError;
