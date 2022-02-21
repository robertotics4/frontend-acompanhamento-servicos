import { Detalhes } from './components/Detalhes';
import { Pesquisa } from './components/Pesquisa';
import { AppProvider } from './hooks';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <AppProvider>
      <Pesquisa />
      {/* <Detalhes /> */}

      <GlobalStyle />
    </AppProvider>

  );
}

export default App;
