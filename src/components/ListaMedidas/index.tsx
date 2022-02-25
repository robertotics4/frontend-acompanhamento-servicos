import { useMedidas } from '../../hooks/medidas';
import { Medida } from './Medida';
import { Container } from './styles';

function ListaMedidas() {
  const { medidas } = useMedidas();

  return (
    <Container>
      {medidas.map((medida) => (
        <Medida
          key={medida.numSequenciaMedida}
          medida={medida}
        />
      ))}
    </Container>
  );
}

export { ListaMedidas };
