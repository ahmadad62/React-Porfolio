import { NavLink, Outlet } from 'react-router-dom';
import "./ContactLayout.scss";

const ContactLayout = () => {
    return (
        <div className='contact-layout'>

            {/* <h2>Keep in Touch!</h2>
            <h4>If you have any further questions or concerns, please do not hesitate to contact me!</h4> */}

            <nav>
                <NavLink to="media">Social Media</NavLink>
                <NavLink to="contactInfo">Contact Me</NavLink>
            </nav>

            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default ContactLayout;

