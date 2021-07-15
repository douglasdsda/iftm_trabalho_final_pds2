import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Header from "../../components/Header";
import { api } from "../../services/api";

function CategoriaEdit() {
  const [name, setName] = useState("");
  const history = useHistory();

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      console.log('teste', name)
      await api.post(`categories`, { name });
      history.push("/categorias");
    } catch (error) {}
  }

  return (
    <div>
      <Header />
      <div className="container">
        <div className="row mt-4 mb-4">
          <h1>Editar Categoria</h1>

          <Link to="/categorias">
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
                  type="name"
                  className="form-control"
                  id="name"
                  aria-describedby="name"
                  placeholder="Digite seu nome..."
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

export default CategoriaEdit;
