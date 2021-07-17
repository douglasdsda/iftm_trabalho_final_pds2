import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { api } from "../../services/api";

function Usuario() {
  const [usuarios, setUsuarios] = useState([]);
  useEffect(() => {
    const loads = async () => {
      try {
        const response = await api.get("users");

 
        setUsuarios(response.data);
      } catch (error) {}
    };

    loads();
  }, []);

  async function handleDelete(id) {
    try {
      await api.delete(`users/${id}`);
      const list = [...usuarios]
      const itemIndex = list.findIndex(w => w.id == id)
      list.splice(itemIndex, 1)
      setUsuarios([...list])
    } catch (error) {}
  }

  return (
    <div>
      <Header />
      <div className="container">
        <div className="row mt-4 mb-4">
          <h1>Usuarios</h1>

          <Link to="usuarioNovo">
            <strong className="btn btn-primary ml-4 mt-2">Novo</strong>
          </Link>
        </div>
        <div className="row">
          <div className="col-12">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nome</th>
                  <th scope="col">Opções</th>
                </tr>
              </thead>
              <tbody>
                {usuarios.map((cat) => (
                  <tr key={cat.id}>
                    <th scope="row">{cat.id}</th>
                    <td>{cat.name}</td>
                    <td>
                      <Link to={`/usuarios/${cat.id}`}>
                        <strong  style={{marginRight: 10}}  className="btn btn-warning mr-2">Editar</strong>
                      </Link>

                      <strong
                        onClick={() => handleDelete(cat.id)}
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

export default Usuario;
