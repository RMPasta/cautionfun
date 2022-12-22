import "./App.css";

function App() {
  return (
    <div className="App">
      <img src={require("./images/yt-thumbnail.jpeg")} alt="cautionfun logo" />

      <h1>Cautionfun</h1>
      <h2>Stuff</h2>

      <div className="two-across">
        <div className="block merch">Merch</div>
        <div className="block ref-links">Ref Links</div>
      </div>

      <div className="footer">
        <ul className="socials">
          <li>
            <img src="socialIcon" alt="socials" />
            <a href="sociallink">Social</a>
          </li>
          <li>
            <img src="socialIcon" alt="socials" />
            <a href="sociallink">Social</a>
          </li>
          <li>
            <img src="socialIcon" alt="socials" />
            <a href="sociallink">Social</a>
          </li>
          <li>
            <img src="socialIcon" alt="socials" />
            <a href="sociallink">Social</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
