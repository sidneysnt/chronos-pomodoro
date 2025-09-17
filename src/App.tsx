import { Container } from './components/Container';
import { Logo } from './components/Logo';

import './styles/theme.css';
import './styles/global.css';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';

export function App() {
  return (
    <>
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
              labelText='Qualquer Coisa'
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
            <div className='cycleDots'>
            </div>
          </div>

          <div className='formRow'>
            <button type='submit'>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
}
export default App;
