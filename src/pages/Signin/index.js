
import { useState, useEffect } from 'react';

import './signin.css';
import IputText from '../../Components/InputText';

function SignIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secure,setSecure] = useState(false);

  useEffect(() => {
    console.log(secure)
  },[secure]);

  const retorna = () => {
    return setSecure(!secure);
  }

  return (
    <div>
      <IputText placeholder="E-mail"/>
      <IputText placeholder="Password" type="password"hasIcon={true} funcao={retorna}/>
      <IputText placeholder="Secret key" type="text"/>
    </div>
  );
}

export default SignIn;
