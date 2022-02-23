import "./App.css";
import logo from "./Images/mux-img.png";
import BitmovinPlayer from "./Components/BitmovinPlayer";

function App() {
  return (
    <div className="app">
      <div id="wrapper">
        <div id="banner">
          <div className="logo">
            <img src={logo} alt="mux logo" width="200" height="200" />
          </div>
          <div className="title">
            <h1>React JS - Monolith Player</h1>
          </div>
          <div className="clear"></div>
        </div>
        <div className="container">
          <h1>Play a video using modules</h1>
          <h2>This is a total test app.</h2>
          <div className="content">
            <div id="player-wrapper">
              <BitmovinPlayer />
            </div>
            <div className="description">
              <p>
                For more information video{" "}
                <a href="//mux.com" target="_blank" rel="noreferrer">
                  G'day mate!
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
