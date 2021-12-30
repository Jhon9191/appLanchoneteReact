import { useState, useEffect } from 'react';

import './signin.css';
import IputText from '../../Components/InputText';
import InputTextSecure from '../../Components/InputTextSecure';
import Text from '../../Components/Text';

function SignIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secure,setSecure] = useState(true);

  const retorna = () => {
    setSecure(!secure);
  }

  return (
    <div className="container-center">
      <div className="login">
      <IputText placeholder="E-mail"/>
      <InputTextSecure placeholder="password" hasIcon={true} funcao={retorna} secure={secure}/>
      
      </div>
    </div>
  );
}

export default SignIn;
