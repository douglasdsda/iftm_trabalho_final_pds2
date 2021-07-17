import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { api } from "../../services/api";

function Produtos() {
  const [produtos, setProdutos] = useState([]);
  useEffect(() => {
    const loads = async () => {
      try {
        const response = await api.get("products");

        console.log(response.data);
        setProdutos(response.data);
      } catch (error) {}
    };

    loads();
  }, []);

  async function handleDelete(id) {
    try {

      await api.delete(`products/${id}`);
      const list = [...produtos]
      const itemIndex = list.findIndex(w => w.id == id)
      list.splice(itemIndex, 1)
      setProdutos([...list])
    } catch (error) {}
  }

  return (
    <div>
      <Header />
      <div className="container">
        <div className="row mt-4 mb-4">
          <h1>Produtos</h1>

          <Link to="produtonovo">
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
                  <th scope="col">Descrição</th>
                  <th scope="col">Preço</th>
                  <th scope="col">Opções</th>
                </tr>
              </thead>
              <tbody>
                {produtos?.content?.map((cat) => (
                  <tr key={cat.id}>
                    <th scope="row">{cat.id}</th>
                    <td>{cat.name}</td>
                    <td>{cat.description}</td>
                    <td>{cat.price}</td>
                    <td>
                      <Link to={`/produtos/${cat.id}`}>
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

export default Produtos;
