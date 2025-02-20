import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import films from '../data/films.json';
import releasing from '../data/releasing.json';

const SearchResults = () => {
  const location = useLocation();
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('query') || '';
    setSearchQuery(query);
    const allFilms = [...films, ...releasing];
    const results = allFilms.filter((film) =>
      film.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  }, [location]);

  return (
    <div className="container px-6 py-8 mx-auto">
      <h1 className="mb-6 text-4xl font-extrabold text-yellow-600">
        Search Results for: {searchQuery || 'All Films'}
      </h1>
      {searchResults.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {searchResults.map((film) => (
            <div
              key={film.id}
              className="relative overflow-hidden transition-shadow duration-300 rounded-lg shadow-lg group hover:shadow-xl"
            >
              <Link
                to={`/films/${film.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <img
                  src={film.poster}
                  alt={film.title}
                  className="w-full h-auto transition-transform duration-300 transform group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 transition-opacity duration-300 bg-gradient-to-t from-black opacity-80 group-hover:opacity-100">
                  <h3 className="text-xl font-bold text-white">{film.title}</h3>
                  <p className="text-yellow-600">
                    {film.releaseYear} - {film.genre}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-xl text-center text-gray-700">No films found</p>
      )}
    </div>
  );
};

export default SearchResults;
