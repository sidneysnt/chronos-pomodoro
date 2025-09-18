import { Container } from './components/Container';
import { Logo } from './components/Logo';

import './styles/theme.css';
import './styles/global.css';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';
import { PlayCircleIcon } from 'lucide-react';
import { Footer } from './components/Footer';
// import { Heading } from './components/Heading';
// import { useState } from 'react';

export function App() {
  //Objetivo: Que todos os componentes reflitam a mudança do número.

  //Sempre que for usado useState nao sera usada atribuicao de valor direta.
  // const [numero, setNumero] = useState(() => {
  //   console.log('Lasy initialization');
  //   return 0;
  // });
  // const [numero, setNumero] = useState(0);

  // function handleClick() {
  //   // setNumero(prevState => prevState + 1);
  //   setNumero(1);
  // }
  return (
    <>
      {/* <Heading>Numero: {numero}</Heading>
      <button onClick={handleClick}>Aumenta</button> */}

      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className='form' action=''>
          <div className='formRow'>
            <DefaultInput
              id='input'
              type='text'
              placeholder='Digite algo...'
              labelText='task'
              // defaultValue='Valor Preenchido'
              //required
              // disabled
            />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'>
            <Cycles />
            <div className='cycleDots'></div>
          </div>

          <div className='formRow'>
            <DefaultButton icon={<PlayCircleIcon />} />
          </div>
        </form>
      </Container>

      <Container>
        <Footer />
      </Container>
    </>
  );
}
export default App;
