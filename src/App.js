import Dictionary from "./Dictionary";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="earth" />
        </main>
        <footer className="App-footer">
          <small>
            {" "}
            Coded by Ayane Manuel and is open-sourced on {""}
            <a
              href="https://github.com/Ayane3/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              GitHub {""}
            </a>
            and hosted on {""}
            <a
              href="https://vocal-salamander-c45526.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
