import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import releasing from '../data/releasing.json';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const UpcomingMovies = () => {
  const slugify = (str) => str.toLowerCase().replace(/\s+/g, '-');
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute z-10 p-4 transition-all duration-300 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full cursor-pointer -right-12 top-1/2 hover:bg-opacity-75 hover:scale-110"
        onClick={onClick}
      >
        <FaArrowRight className="text-white " />
      </div>
    );
  };
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute z-10 p-4 transition-all duration-300 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full cursor-pointer -left-12 top-1/2 hover:bg-opacity-75 hover:scale-110"
        onClick={onClick}
      >
        <FaArrowLeft className="text-white " />
      </div>
    );
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    nextArrow: <NextArrow />, 
    prevArrow: <PrevArrow />, 
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 4, slidesToScroll: 1 }
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 1 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 1 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 }
      }
    ]
  };

  return (
    <div id="releasing" className="relative py-8 bg-white">
      <div className="container mx-auto">
        <h2 className="mb-6 text-4xl font-extrabold text-center text-yellow-600">
          Upcoming 
        </h2>
        <div className="relative">
          <Slider {...sliderSettings}>
            {releasing.map((film) => (
              <div key={film.id} className="px-2">
                <div className="relative overflow-hidden transition-shadow duration-300 rounded-lg group hover:shadow-none">
                  <Link to={`/releasing/${slugify(film.title)}`}>
                    <img
                      src={film.poster}
                      alt={film.title}
                      className="object-cover w-full h-auto transition-transform duration-300 transform max-h-80 md:max-h-96 group-hover:scale-105"
                      style={{
                        aspectRatio: '2 / 3',
                      }}
                    />
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default UpcomingMovies;
