import { useEnvironment } from '../src/useEnvironment';

export default {
  title: 'useEnvironment',
};

export function Documentation() {
  const env = useEnvironment();

  return <p>{JSON.stringify(env)}</p>;
}
