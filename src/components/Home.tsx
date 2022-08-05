import React from "react";
import '../App.css'
import Skills from "./Skills";

function Home() {
    return (
        <div className="homepage">
            <Skills />
            <img id="avatar" src="/pfp.png" alt="Photo of me" width={'30%'} height={'30%'}/>
        </div>
    )
}

export default Home