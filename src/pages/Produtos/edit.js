import { useEffect } from "react";
import { useState } from "react";
import { Link, useRouteMatch, useHistory } from "react-router-dom";
import Header from "../../components/Header";
import { api } from "../../services/api";
 


function ProdutoEdit() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [price, setPrice] = useState("");
 
  const history = useHistory();
  const { params } = useRouteMatch();

  console.log('params: ', params)

  useEffect(() => {
      const loads = async () => {
         try {
          const {id} = params;
          if(id){
          const response = await api.get(`products/${id}`)
           setName(response.data.name)
           setDescription(response.data.name)
           setImgUrl(response.data.name)
           setPrice(response.data.name)
          }
         } catch (error) {
           alert('Ocorreu algum erro ao tentar carregar')
         }
      }

      loads()
  }, [params])


  async function handleSubmit(e) {
    try {
      e.preventDefault();
     
      await api.post(`products/${params.id}`, { price, imgUrl, description, id: Number(params.id), name });
      history.push("/produtos");
    } catch (error) {}
  }

  return (
    <div>
      <Header />
      <div className="container">
        <div className="row mt-4 mb-4">
          <h1>Editar Produto</h1>

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

export default ProdutoEdit;
