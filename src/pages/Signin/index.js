import { useState, useEffect } from 'react';

import './signin.css';
import IputText from '../../Components/InputText';
import InputTextSecure from '../../Components/InputTextSecure';


function SignIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secure,setSecure] = useState(true);

  const retorna = () => {
    setSecure(!secure);
  }

  return (
    <div>
      <IputText placeholder="E-mail"/>
      <InputTextSecure placeholder="password" hasIcon={true} funcao={retorna} secure={secure}/>
    </div>
  );
}

export default SignIn;
