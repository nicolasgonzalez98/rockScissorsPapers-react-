import styled from 'styled-components'
import Header from './components/Header/Header';
import Table from './components/Table/Table';
import { Wrapper } from './components/Wrapper/Wrapper';
import { ScoreContextProvider } from './context/ScoreContext';


function App() {

  

  const AppStyled = styled.main`
    background-image: radial-gradient(circle at top, #1f3757 20%, #131537 100%);
    

    .app-content{
      min-height: 100vh;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }
  `

  return (
    <ScoreContextProvider>
      <AppStyled>
        <Wrapper>  
          <div className='app-content'>
            <Header />
            <Table />
          </div>
        </Wrapper>
      </AppStyled>
    </ScoreContextProvider>
  );
}

export default App;
