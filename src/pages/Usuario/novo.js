import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Header from "../../components/Header";
import { api } from "../../services/api";

function UsuarioNovo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  async function handleSubmit(e) {
    try {
      e.preventDefault();

      await api.post(`users`, { phone, password, email, name });
      history.push("/usuarios");
    } catch (error) {}
  }

  return (
    <div>
      <Header />
      <div className="container">
        <div className="row mt-4 mb-4">
          <h1>Novo Usuario</h1>

          <Link to="/usuarios">
            <strong className="btn btn-primary ml-4 mt-2">Voltar</strong>
          </Link>
        </div>
        <div className="row">
          <div className="col-12">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nome</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="form-control"
                  id="name"
                  aria-describedby="name"
                  placeholder="Digite seu Nome..."
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Nome</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="name"
                  placeholder="Digite seu e-mail..."
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Telefone</label>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="text"
                  className="form-control"
                  id="phone"
                  aria-describedby="phone"
                  placeholder="Digite seu e-mail..."
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="form-control"
                  id="password"
                  aria-describedby="password"
                  placeholder="Digite sua senha.."
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Salvar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsuarioNovo;
