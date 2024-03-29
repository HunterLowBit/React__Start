import logo from "./logo.png";
import "./App.css";import { Footer } from "./style";
import { StyledNavbar } from "./style";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StyledNavbar>
          <ul>
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">INFO</a>
            </li>
            <li>
              <a href="https://github.com/HunterLowBit/React__Start">GITHUB</a>
            </li>
          </ul>
        </StyledNavbar>
        <div className="header-logo-container">
          <img src={logo} className="App-logo" alt="logo" />
        </div>

        <div className="header-content-container">
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
      <Footer>
        <h3>Copyright © 2024</h3>
      </Footer>
    </div>
  );
}

export default App;
