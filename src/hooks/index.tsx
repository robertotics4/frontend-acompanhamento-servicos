import { MedidasProvider } from './medidas';

interface Props {
  children: React.ReactNode
}

const AppProvider: React.FC<Props> = ({ children }: Props) => (
  <MedidasProvider>
    {children}
  </MedidasProvider>
);

export { AppProvider };
