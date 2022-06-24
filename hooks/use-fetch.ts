import useSWR from 'swr';
// import { API_URL } from '../config';

interface IProps {
  path: string;
}
const fetcher = (url: string) =>
  fetch(url).then((res) => {
    if (!res.ok) {
      const error = new Error('An error occurred while fetching the data.');
      throw error;
    }
    return res.json();
  });

const useFetch = <T = any, P = any>({ path }: IProps) => {
  const { data, error } = useSWR<T, P>(`${path}`, fetcher);

  return { data, error };
};

export default useFetch;
