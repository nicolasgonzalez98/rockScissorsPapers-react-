import styled from 'styled-components'

function App() {

  const AppStyled = styled.main`
    background-image: radial-gradient(circle at top, #1f3757 20%, #131537 100%);

    .app-content{
      min-height: 100vh;
    }
  `

  return (
    <AppStyled>
      <div className='app-content'>

      </div>
    </AppStyled>
  );
}

export default App;
