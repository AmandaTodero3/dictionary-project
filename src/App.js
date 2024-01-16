import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary />
        </main>
        <div className="App-footer">
          <footer>
            This dictionary was coded by
            <a href="https://github.com/AmandaTodero3"> Amanda Todero </a>and
            is&nbsp;
            <a
              href="https://github.com/AmandaTodero3/dictionary-project"
              target="_blank"
            >
              open-sourced on Github
            </a>
            &nbsp;and hosted on
            <a href="https://dictionary-project-taupe.vercel.app/"> Vercel</a>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
