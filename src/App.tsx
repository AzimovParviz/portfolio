import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="App">
      <header>
        <Sidebar />
      </header>
      <footer>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://icons8.com/icon/87836/resume-website"
        >
          Resume Website icon by Icons8
        </a>
      </footer>
      <Analytics />
    </div>
  );
}

export default App;
