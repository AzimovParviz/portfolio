import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
    delay: 300, //300ms delay so the cards don't appear too quickly
    duration: 600
});

function App() {
  return (
    <div className="App">
      <header>
        <Sidebar />
      </header>
      <footer className='text-center text-lg-start bg-light text-muted'>
        <a target="_blank" href="https://icons8.com/icon/87836/resume-website">Resume Website icon by Icons8</a>
      </footer>
    </div>
  );
}

export default App;
