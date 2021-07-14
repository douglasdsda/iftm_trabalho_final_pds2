import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import Logo from "../../assets/Mobile-login.jpg";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
// import api from '../services/api.ts'
function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [check, setCheck] = useState(false);
  const { signIn } = useAuth()
  const history = useHistory();

  async function handleSubmit(e) {
   try {
    e.preventDefault();

    console.log({ email, senha });

    console.log("teste: ");
    

   await signIn({
      email,
      password: senha,
    })
    console.log('passou')
    history.push('/dashbord');
   } catch (error) {
     console.log('errr')
   }
  }

  function handleTeste(){
    history.push('/dashbord');
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-6 d-flex   justify-content-center align-items-center">
          <img src={Logo} width="500" height="500" alt="Login" />
        </div>
        <div className="col-6 d-flex flex-column  justify-content-center align-items-center">
          <h1>Login</h1>

          <Button onClick={handleTeste}>testar</Button>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Entrar com email"
              />
              <Form.Text className="text-muted">Coloque um e-mail</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                type="password"
                placeholder="Senha"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Lembrar-me" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Logar
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
