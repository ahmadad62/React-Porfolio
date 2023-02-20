import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const About = () => {
    const [isLogin, setIsLogin] = useState(true)

    // if(!isLogin) {
    //     return  <Navigate to="/"/>
    // }
    const paragraph=(
        <>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem maxime quis saepe unde nulla soluta quae totam deleniti delectus, ipsam sint necessitatibus. Praesentium labore illum doloremque veniam, culpa quia vero. Rerum nostrum aliquid eligendi? Eligendi doloremque a accusantium, quas officia quis repellendus reprehenderit sunt, est deserunt cupiditate soluta ullam? Ea.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem maxime quis saepe unde nulla soluta quae totam deleniti delectus, ipsam sint necessitatibus. Praesentium labore illum doloremque veniam, culpa quia vero. Rerum nostrum aliquid eligendi? Eligendi doloremque a accusantium, quas officia quis repellendus reprehenderit sunt, est deserunt cupiditate soluta ullam? Ea.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem maxime quis saepe unde nulla soluta quae totam deleniti delectus, ipsam sint necessitatibus. Praesentium labore illum doloremque veniam, culpa quia vero. Rerum nostrum aliquid eligendi? Eligendi doloremque a accusantium, quas officia quis repellendus reprehenderit sunt, est deserunt cupiditate soluta ullam? Ea.
            </p>
        </>
    )
    return (
        isLogin ?
            <div className='home'>
            <h2>Welcome About</h2>
            {paragraph}
            <button onClick={()=>setIsLogin(false)}>Logout</button>
        </div> : <Navigate to="/"/>
    );
}

export default About;
