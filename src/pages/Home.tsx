import "../App.css";
import Skills from "./Skills";

function Home() {
  return (
    <div className="homepage">
      <Skills />
      <img id="avatar" src="/avi.jpg" alt="" width={"30%"} height={"30%"} />
    </div>
  );
}

export default Home;
