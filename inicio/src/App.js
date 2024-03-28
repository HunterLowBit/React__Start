import logo from "./logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-logo-container">
          <img src={logo} className="App-logo" alt="logo" />
        </div>

        <div className="header-content-container">
          <h1>Seja bem-vindo!</h1>

          <div className="login-container">
            <h2>Entre com seu nome e senha:</h2>
            <div className="input-container">
              <input type="text" placeholder="Seu nome" />
              <input type="password" placeholder="Sua senha" />
            </div>

            <button onClick={() => alert("Você está logado!")}>Login</button>
          </div>

          <div className="logout-container">
            <button onClick={() => alert("Você está deslogado!")}>
              Logout
            </button>
          </div>

          <div className="signup-container">
            <h2>Cadastre-se:</h2>
            <button onClick={() => alert("Você se cadastrou com sucesso!")}>
              Cadastrar
            </button>
          </div>
        </div>
      </header>

      <footer className="App-footer">
        <h3>Copyright © 2024</h3>
      </footer>
    </div>
  );
}

export default App;
