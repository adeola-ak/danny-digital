import "./App.css";
import HomeNav from "./HomeNav/HomeNav";
import { FaArtstation } from "react-icons/fa";

export const Volume = () => {
  return (
    <div>
      <FaArtstation />
    </div>
  );
};

function App() {
  return (
    <>
      <div className="App">
        <HomeNav />
        <div class="video-wrapper">
          <video preload="auto" autoPlay loop muted playsInline data-object-fit>
            <source
              src="http://www.jsjr.design/danny/video/video.mp4"
              type="video/webm"
            ></source>
          </video>
          <div className="page-title">
            <p className="title">Photographer / Videographer</p>
            <span className="purpose">
              DANNY<br></br> DIGITAL<br></br>PORTFOLIO
            </span>
          </div>
          <div className="test">
            <FaArtstation />
          </div>{" "}
        </div>
      </div>

      {/* <div class="works-filter text-center" role="tablist">
        <a
          href="/"
          class="filter active"
          role="tab"
          aria-selected="true"
          data-filter="*"
        >
          All works
        </a>
        <a
          href="#branding"
          class="filter"
          role="tab"
          aria-selected="false"
          data-filter=".musicvideo"
        >
          Videos
        </a>
        <a
          href="#design"
          class="filter"
          role="tab"
          aria-selected="false"
          data-filter=".interview"
        >
          Photography
        </a>
      </div> */}

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </>
  );
}

export default App;
