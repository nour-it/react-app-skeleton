import { useSearchParams } from 'react-router-dom';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');

  return (
    <div>
      <h1>Résultats de recherche</h1>
      <p>Recherche pour : {query}</p>
      {/* Implement your search results logic here */}
    </div>
  );
};

export default SearchResults;
