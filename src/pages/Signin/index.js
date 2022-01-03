import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './signin.css';

import IputText from '../../Components/InputText';
import InputTextSecure from '../../Components/InputTextSecure';
import Button from '../../Components/Button';

function SignIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secretKey, setSecretKey] = useState('');
  const [secure,setSecure] = useState(true);

  const retorna = () => {
    setSecure(!secure);
  }

  const handleValidation = () => {
    console.log(email, password);
  }

  return (
    <div className="container-center">
      <div className="login">
      <h2>Já tem cadastro?</h2>
      <IputText placeholder="E-mail" funcao={(e) => setEmail(e.target.value)}/>
      <IputText placeholder="Secret key" funcao={(e) => setSecretKey(e.target.value)}/>
      <InputTextSecure placeholder="Password" onChange={(e) => setPassword(e.target.value)} hasIcon={true} funcao={retorna} secure={secure}/>
      <Button name="Entrar"/>
      <Link to="/register">Criar uma nova conta</Link>
      </div>
    </div>
  );
}

export default SignIn;
