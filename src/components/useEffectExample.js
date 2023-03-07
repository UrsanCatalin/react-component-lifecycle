import { useEffect, useState } from 'react';

const HookExample = () => {

    const [count, setCount] = useState(0);
    //daca array de dependinte este prezent dar gol, callback ul se va executa doar la montarea componentei
  useEffect(() => {}, []);
    //daca array de dependinte lipseste, callback ul se va executa la fiecare randare a componentei
  useEffect(() => {});
    //daca array de dependinte contine stateuri, callbackul va fi executat daca oricare din aceste stateuri este rescris
  useEffect(() => {}, [count]);

  return null;
}


export default HookExample;