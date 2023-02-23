import { NavLink, Outlet } from 'react-router-dom';
import "./ContactLayout.scss";

const ContactLayout = () => {
    return (
        <div className='contact-layout'>

            <h2>Keep in Touch!</h2>
            <p>If you have any further questions or concerns, please do not hesitate to contact me!</p>

            <nav>
                <NavLink to="media">Social Media</NavLink>
                <NavLink to="contactInfo">Contact Me</NavLink>
            </nav>

            <Outlet />
        </div>
    );
}

export default ContactLayout;
