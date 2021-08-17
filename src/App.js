import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary defaultKeyword="island" />
        </main>
      </div>
      <footer className="App-footer">
        Coded by{" "}
        <a
          href="https://silly-kepler-6e4998.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          Amanda Dobias
        </a>{" "}
        and open sourced on{" "}
        <a
          href="https://github.com/adobias7811"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
