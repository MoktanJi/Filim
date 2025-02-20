import React from 'react';
import AllMovies from '../components/AllMovies';
import UpcomingMovies from '../components/UpcomingMovies';

const Hero = ({
  title = "Baasuri Film Productions",
  subtitle = "Bringing Stories to Life",
  backgroundImage,
}) => {
  return (
    <div
      className="relative w-full h-screen bg-center bg-cover"
      style={{
        backgroundImage: `url(${backgroundImage || "https://ennepalkhabar.prixacdn.net/media/gallery_folder/gharjwain_KIdyOjxdyd.jpg"})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl font-extrabold md:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-4 text-lg md:text-xl lg:text-2xl opacity-90">
          {subtitle}
        </p>
        <a
          href="#upcoming"
          className="px-6 py-3 mt-8 text-sm font-semibold text-black transition-all duration-300 transform bg-white rounded-lg shadow-xl hover:bg-gray-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-600"
        >
          Explore Films
        </a>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <Hero 
        title="Baasuri Film Productions" 
        subtitle="Bringing Stories to Life" 
      />
      <div> 
        <UpcomingMovies />
        <AllMovies />
      </div>
    </div>
  );
};

export default Home;
