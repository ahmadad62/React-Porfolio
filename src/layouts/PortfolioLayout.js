import { Outlet } from "react-router-dom"

export default function PortfolioLayout() {
    return (
        <div className="portfolio-layout">
            <h2>Portfolio</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit?</p>

            <Outlet />
        </div>
    )
}