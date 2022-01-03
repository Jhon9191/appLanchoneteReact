import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


import IputText from '../../Components/InputText';
import InputTextSecure from '../../Components/InputTextSecure';
import Button from '../../Components/Button';

function Signup() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [secretKey, setSecretKey] = useState('');
  const [secure, setSecure] = useState(true);

  const retorna = () => {
    setSecure(!secure);
  }

  const handleValidation = () => {
    console.log(email, password);
  }

  return (
    <div className="container-center">
      <div className="login">
        <div style={{width: '65%', margin: 6, display: 'flex', flexDirection: 'column'}}>
          <h2>Efetuar cadastro</h2>
          {/* <h4>Realize já seu login</h4> */}
        </div>
        <IputText placeholder="Secret key" funcao={(e) => setSecretKey(e.target.value)} />
        <IputText placeholder="E-mail" funcao={(e) => setEmail(e.target.value)} />
        <InputTextSecure placeholder="Password" onChange={(e) => setPassword(e.target.value)} hasIcon={true} funcao={retorna} secure={secure} />
        <InputTextSecure placeholder="Repeat password" onChange={(e) => setRepeatPassword(e.target.value)} hasIcon={true} funcao={retorna} secure={secure} />
        <Button name="Cadastrar" />
        <Link className="link" to="/">Já possuo uma conta</Link>
      </div>
    </div>
  );
}

export default Signup;
