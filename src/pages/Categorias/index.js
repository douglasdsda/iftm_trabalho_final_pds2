import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { api } from "../../services/api";

function Categorias() {
  const [categorias, setCategorias] = useState([]);
  useEffect(() => {
    const loads = async () => {
      try {
        const response = await api.get("categories");

        console.log(response.data);
        setCategorias(response.data);
      } catch (error) {}
    };

    loads();
  }, []);

  async function handleDelete(id) {
    try {
      await api.delete(`categories/${id}`);
    } catch (error) {}
  }

  return (
    <div>
      <Header />
      <div className="container">
        <div className="row mt-4 mb-4">
          <h1>Categorias</h1>

          <Link to="categorianova">
            <strong className="btn btn-primary ml-4 mt-2">Novo</strong>
          </Link>
        </div>
        <div className="row">
          <div className="col-12">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nome</th>
                  <th scope="col">Opções</th>
                </tr>
              </thead>
              <tbody>
                {categorias.map((cat) => (
                  <tr key={cat.id}>
                    <th scope="row">{cat.id}</th>
                    <td>{cat.name}</td>
                    <td>
                      <Link to={`/categorias/${cat.id}`}>
                        <strong className="btn btn-warning">Editar</strong>
                      </Link>

                      <strong
                        onclick={() => handleDelete(cat.id)}
                        className="btn btn-danger ml-4"
                      >
                        Delete
                      </strong>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categorias;
