import React, { Component } from "react";
import userService from "./userService";

class UserComponent extends Component {
  state = {
    users: [],
    newUser: {
      // Add newUser object to the state
      nome: "",
      email: "",
      senha: "",
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
    const { name, value } = event.target;
    this.setState((prevState) => ({
      newUser: {
        ...prevState.newUser,
        [name]: value,
      },
    }));
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await userService.createUser(this.state.newUser);
      this.fetchUsers();
      this.setState({
        newUser: { nome: "", email: "", senha: "" },
      });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { users, newUser } = this.state;

    return (
      <div>
        <h2>Usuários</h2>
        <form onSubmit={this.handleSubmit}>
          {/* Form inputs */}
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            value={newUser.nome}
            onChange={this.handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={newUser.email}
            onChange={this.handleInputChange}
          />
          <input
            type="password"
            name="senha"
            placeholder="Senha"
            value={newUser.senha}
            onChange={this.handleInputChange}
          />
          <button type="submit">Adicionar Usuário</button>
        </form>
        {/* Display users */}
        <ul>
          {users.map((user) => (
            <li key={user._id}>
              {user.nome} - {user.email}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UserComponent;
