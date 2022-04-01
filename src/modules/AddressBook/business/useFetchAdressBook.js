import { useEffect, useState } from 'react';
import { HttpService } from '../../../services';

/**
 * Fetch Adressbook data from mock data service.
 * @name useFetchAdressBook
 * @example
 * const [response, loding, error] = useFetchAdressBook();
 */
const useFetchAdressBook = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    HttpService.beginRequest({ url: '/address_book.json' })
      .then((res) => {
        setResponse(res);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return [response, loading, error];
};

export default useFetchAdressBook;
