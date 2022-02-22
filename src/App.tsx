import { Seletor } from './components/Seletor';
import { AppProvider } from './hooks';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <AppProvider>
      <Seletor />

      <GlobalStyle />
    </AppProvider>

  );
}

export default App;
