import { useState, useEffect } from 'react';
import banner1 from '../../assets/martha-dominguez-de-gouveia-nMyM7fxpokE-unsplash.jpg'
import banner2 from '../../assets/AdobeStock_219914874.jpeg'
import banner3 from '../../assets/nguy-n-hi-p-2rNHliX6XHk-unsplash.jpg'

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Carousel items with image URLs
  const slides = [
    { id: 1, imageUrl: `${banner1}` },
    { id: 2, imageUrl: `${banner2}` },
    { id: 3, imageUrl: `${banner3}` },
  ];

  // Change slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div>
      <div className="carousel w-full mb-96">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-item h-full w-full  absolute  transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src={slide.imageUrl} alt={`Slide ${slide.id}`} className="w-full   h-4/5 object-cover" />
          </div>
        ))}
        <div className="flex justify-center gap-2 mt-2 ">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full ${index === currentSlide ? 'bg-blue-500' : 'bg-gray-400'}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>


      <div className="card bg-transparent border border-blue-950 text-white md:w-2/5 w-4/5 md:ml-20  shadow-6xl relative -mt-64">
        <div className="card-body">
          <h2 className="card-title text-5xl text-pink-700 ">We are serving you</h2>
          <p className='text-2xl text-blue-950'>Like your family</p>
          <div className="card-actions">
            <button className="btn bg-blue-900 text-xl text-white w-full">Appointment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
