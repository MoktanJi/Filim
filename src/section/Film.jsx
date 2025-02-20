import React from 'react';
import { Link } from 'react-router-dom';
import films from '../data/films.json';  
import releasing from '../data/releasing.json';  

const Films = () => {
  const slugify = (str) => str.toLowerCase().replace(/\s+/g, '-');
  const allFilms = [...films, ...releasing];
  allFilms.sort((a, b) => b.releaseYear - a.releaseYear);

  return (
    <div className="container px-6 py-8 mx-auto">
      <h1 className="mb-6 text-4xl font-extrabold text-yellow-600">Our Films</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {allFilms.map((film) => (
          <div key={film.title} className="relative overflow-hidden transition-shadow duration-300 rounded-lg shadow-lg group hover:shadow-xl">
            <Link to={`/films/${slugify(film.title)}`}>
              <img
                src={film.poster}
                alt={film.title}
                className="w-full h-auto transition-transform duration-300 transform group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 transition-opacity duration-300 bg-gradient-to-t from-black opacity-80 group-hover:opacity-100">
                <h3 className="text-xl font-bold text-white">{film.title}</h3>
                <p className="text-yellow-600">{film.releaseYear} - {film.genre}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Films;
