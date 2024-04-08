// UserComponent.js

import React, { Component } from "react";
import userService from "./userService";

class UserComponent extends Component {
  state = {
    users: [],
    newUser: {
      nome: "",
      email: "",
      senha: "",
      admin: false,
    },
  };

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = async () => {
    try {
      const users = await userService.getAllUsers();
      this.setState({ users });
    } catch (error) {
      console.error(error);
    }
  };

  handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const inputValue = type === "checkbox" ? checked : value;

    this.setState((prevState) => ({
      newUser: {
        ...prevState.newUser,
        [name]: inputValue,
      },
    }));
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await userService.createUser(this.state.newUser);
      this.fetchUsers();
      this.setState({
        newUser: { nome: "", email: "", senha: "", admin: false },
      });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { users, newUser } = this.state;

    return (
      <div>
        <h2>Lista de Usuários</h2>
        <ul>
          {users.map((user) => (
            <li key={user._id}>
              <strong>Nome:</strong> {user.nome}, <strong>Email:</strong>{" "}
              {user.email}
            </li>
          ))}
        </ul>

        <h2>Adicionar Usuário</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Nome:
              <input
                type="text"
                name="nome"
                value={newUser.nome}
                onChange={this.handleInputChange}
              />
            </label>
          </div>
          <div>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={newUser.email}
                onChange={this.handleInputChange}
              />
            </label>
          </div>
          <div>
            <label>
              Senha:
              <input
                type="password"
                name="senha"
                value={newUser.senha}
                onChange={this.handleInputChange}
              />
            </label>
          </div>
          <div>
            <label>
              Administrador:
              <input
                type="checkbox"
                name="admin"
                checked={newUser.admin}
                onChange={this.handleInputChange}
              />
            </label>
          </div>
          <button type="submit">Adicionar Usuário</button>
        </form>
      </div>
    );
  }
}

export default UserComponent;
