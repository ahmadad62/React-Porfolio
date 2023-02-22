import { NavLink, Outlet } from 'react-router-dom';
import "./HelpLayout.scss";

const HelpLayout = () => {
    return (
        <div className='help-layout'>

            <h2>Website Help</h2>
            <p>If you have any further questions or concerns, please do not hesitate to contact me!</p>

            <nav>
                <NavLink to="faq">View the FAQ</NavLink>
                <NavLink to="contact">Contact us</NavLink>
            </nav>

            <Outlet />
        </div>
    );
}

export default HelpLayout;
