import { useMedidas } from '../../hooks/medidas';
import { Detalhes } from '../Detalhes';
import { Pesquisa } from '../Pesquisa';

function Seletor() {
  const { medidas } = useMedidas();

  return medidas.length ? <Detalhes /> : <Pesquisa />;
}

export { Seletor };
