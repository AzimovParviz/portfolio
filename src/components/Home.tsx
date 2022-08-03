import React from "react";
import '../App.css'
import Skills from "./Skills";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
    delay: 300, //300ms delay so the cards don't appear too quickly
    duration: 600
});

function Home() {
    return (
        <div className="homepage">
            <Skills />
            <img id="avatar" src="/pfp.png" alt="Photo of me" width={'30%'} height={'30%'} data-aos="fade-left"/>
        </div>
    )
}

export default Home