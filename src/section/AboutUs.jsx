import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-white">
      <div className="relative bg-center bg-cover h-96" style={{ backgroundImage: 'url(https://www.thefilmnepal.com/uploads/medias/baasuri-films.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white py-36">
          <h1 className="mb-4 text-5xl font-extrabold">About Us</h1>
          <p className="mb-6 text-xl">"Cinema is a mirror by which we often see ourselves."</p>
        </div>
      </div>
      <div className="container px-6 py-16 mx-auto text-center">
        <p className="mb-8 text-xl leading-relaxed text-gray-700">
          Baasuri Films is a movie production and distribution company based in Nepal. We specialize in capturing the essence of local values and stories, bringing them to the global stage. Founded by Ram Babu Gurung, our company is deeply rooted in promoting and preserving Nepali culture through film.
        </p>
      </div>
      <div className="py-12 bg-gray-50">
        <div className="container px-6 mx-auto text-center">
          <div className="flex justify-center gap-12">
            <div className="max-w-xs p-8 transition-all transform bg-white shadow-lg rounded-xl hover:scale-105">
              <h2 className="mb-4 text-2xl font-semibold text-yellow-600">Our Mission</h2>
              <p className="text-lg text-gray-700">
                Our mission is to produce films that entertain, educate, and inspire. By showcasing diverse Nepali stories, we aim to bridge the gap between cultures and provide a platform for the richness of Nepali culture on the global stage.
              </p>
            </div>

            <div className="max-w-xs p-8 transition-all transform bg-white shadow-lg rounded-xl hover:scale-105">
              <h2 className="mb-4 text-2xl font-semibold text-yellow-600">Our Vision</h2>
              <p className="text-lg text-gray-700">
                We aspire to become a global leader in film production and distribution, showcasing Nepali stories that transcend cultural boundaries. Through our work, we hope to inspire and educate audiences worldwide, preserving the authenticity of Nepali culture and heritage.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-16 bg-white">
        <div className="container px-6 mx-auto text-center">
          <h2 className="mb-6 text-3xl font-extrabold text-yellow-600">Our Writer, Director, and Producer</h2>
          <div className="flex justify-center gap-8">
           <div className="max-w-xs p-8 transition-all duration-300 transform bg-gray-200 shadow-lg rounded-xl hover:scale-105 hover:shadow-xl">
              <div className="flex justify-center mb-4">
                <img
                  src="https://image.tmdb.org/t/p/w235_and_h235_face/qXBMgpju2OgGTBBkSt8zNyp3T6T.jpg"
                  alt="Ram Babu Gurung"
                  className="w-32 h-32 border-4 rounded-full"
                />
              </div>
                <h3 className="mb-4 text-2xl font-semibold text-yellow-600">Ram Babu Gurung</h3>
                <p className="mb-4 text-lg text-black">Writer, Director, and Producer</p>
                <p className="mb-4 text-black">
                  Ram Babu Gurung believes that films are not just a form of entertainment but a powerful medium to showcase the diversity and richness of different cultures and communities.
                </p>
              <div className="mt-4">
                <h4 className="text-xl font-semibold text-yellow-600">Contact Information</h4>
                <p className="text-black"><strong>Email:</strong> rbgurung@gmail.com</p>
                <p className="text-black"><strong>Phone:</strong> +977-9876543210</p>
                <p className="text-black"><strong>Address:</strong> Kathmandu, Nepal</p>
              </div>
            </div>  
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
