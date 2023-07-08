import { hooks } from 'utils';

interface PropsI {
  children: React.ReactNode;
}

function ContextContainer({ children }: PropsI) {
  return <hooks.ProvideAuth>{children}</hooks.ProvideAuth>;
}

export default ContextContainer;
