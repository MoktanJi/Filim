import React from 'react';
import { useParams } from 'react-router-dom';
import films from '../data/films.json';
import releasing from '../data/releasing.json';

const FilmDetails = () => {
  const { name } = useParams();
  const film = [...films, ...releasing].find(
    (film) =>
      film.title.toLowerCase().replace(/\s+/g, '-').toLowerCase() === name.toLowerCase()
  );

  return (
    <div className="container px-6 py-8 mx-auto">
      {film ? (
        <div className="flex flex-col items-center max-w-6xl mx-auto space-x-8 lg:flex-row">
          <div className="w-full lg:w-1/2">
            <img
              className="object-cover w-full h-auto rounded-lg shadow-xl"
              src={film.poster}
              alt={film.title}
            />
          </div>
          <div className="w-full mt-6 lg:w-1/2 lg:mt-0">
            <h1 className="mb-4 text-4xl font-extrabold text-brown-600">{film.title}</h1>
            <p className="text-xl font-semibold text-gray-700">Synopsis</p>
            <p className="mt-2 text-lg text-gray-800">{film.synopsis}</p>

            <div className="mt-6 space-y-4">
              <p className="text-lg"><strong>Release Year:</strong> {film.releaseYear}</p>
              <p className="text-lg"><strong>Genre:</strong> {film.genre}</p>
              <p className="text-lg"><strong>Director:</strong> {film.director}</p>
              <p className="text-lg"><strong>Cast:</strong> {film.cast.map((actor, i) => (
                <span key={i}>
                  {actor.name}
                  {i < film.cast.length - 1 ? ', ' : ''}
                </span>
              ))}</p>
            </div>
            {film.youtubeLink && (
              <div className="mt-6">
                <h2 className="text-xl font-semibold text-gray-700">Watch Trailer</h2>
                <div className="mt-4">
                  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={film.youtubeLink.replace("watch?v=", "embed/")}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={film.title}
                    ></iframe>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <p className="text-xl text-center text-gray-700">Film not found</p>
      )}
    </div>
  );
};

export default FilmDetails;
