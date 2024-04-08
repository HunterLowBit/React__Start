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

        <form className="App-user-list" action="/" method="post">
          <label htmlFor="user">User:</label>
          <input type="text" name="user" id="user" />
          <button type="submit">Listar</button>
        </form>
        <form className="App-user-create" action="/user/create" method="post">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" />
          <label htmlFor="email">E-mail:</label>
          <input type="email" name="email" id="email" />
          <button type="submit">Criar</button>
        </form>
        <form className="App-user-edit" action="/user/edit" method="post">
          <label htmlFor="id">Id:</label>
          <input type="text" name="id" id="id" />
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" />
          <label htmlFor="email">E-mail:</label>
          <input type="email" name="email" id="email" />
          <button type="submit">Editar</button>
        </form>
        <form className="App-user-delete" action="/user/delete" method="post">
          <label htmlFor="id">Id:</label>
          <input type="text" name="id" id="id" />
          <button type="submit">Deletar</button>
        </form>

      </header>
      <Footer>
        <h3>Copyright © 2024</h3>
      </Footer>
    </div>
  );
}

export default App;
