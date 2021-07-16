import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Header from "../../components/Header";
import { api } from "../../services/api";

function ProdutoNovo() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [price, setPrice] = useState("");

  const history = useHistory();

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      console.log('teste', name)
      await api.post(`products`,{ description, imgUrl, name, price });
      history.push("/produtos");
    } catch (error) {}
  }

  return (
    <div>
      <Header />
      <div className="container">
        <div className="row mt-4 mb-4">
          <h1>Nova Categoria</h1>

          <Link to="/produtos">
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
              <div className="form-group">
                <label htmlFor="description">Descrição</label>
                <input
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  type="description"
                  className="form-control"
                  id="description"
                  aria-describedby="description"
                  placeholder="Digite a Descrição..."
                />
              </div>
              <div className="form-group">
                <label htmlFor="imgUrl">imgUrl</label>
                <input
                  value={imgUrl}
                  onChange={(e) => setImgUrl(e.target.value)}
                  type="imgUrl"
                  className="form-control"
                  id="imgUrl"
                  aria-describedby="imgUrl"
                  placeholder="Digite a URL..."
                />
              </div>
              <div className="form-group">
                <label htmlFor="price">Preço</label>
                <input
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  type="price"
                  className="form-control"
                  id="price"
                  aria-describedby="price"
                  placeholder="Digite o Preço..."
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

export default ProdutoNovo;
