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
            <a
              href="https://github.com/AmandaTodero3/dictionary-project"
              target="_blank"
            >
              Open-sourced
            </a>{" "}
            code by Amanda Todero
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
