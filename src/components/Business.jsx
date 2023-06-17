import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Lady from '../assets/bluecar.jpg';

const Business = () => {
  const isMobile = window.innerWidth <= 708; // Set your desired mobile breakpoint here

  return (
    <section className="p-4">
      <h3 className="text-lg text-center font-bold mb-4">
        Our services are designed for <br /> business of all sizes
      </h3>

      {isMobile ? (
        <Carousel showArrows={true} infiniteLoop={true} showStatus={false} showThumbs={false}>
          <div>
            <figure className="relative max-w-sm mx-auto cursor-pointer">
              <a href="#">
                <img className="rounded-lg" src={Lady} alt="image description" />
              </a>
              <figcaption className="absolute font-bold text-white bg-translucent bottom-0 rounded-b-lg flex justify-between p-2 w-full">
                <h5>text goes here</h5>

                <span className="icon bg-primary text-lg font-bold text-white material-symbols-outlined">
                  chevron_right
                </span>
              </figcaption>
            </figure>
          </div>

          <div>
            <figure className="relative max-w-sm mx-auto cursor-pointer">
              <a href="#">
                <img className="rounded-lg" src={Lady} alt="image description" />
              </a>
              <figcaption className="absolute font-bold text-white bg-translucent bottom-0 rounded-b-lg flex justify-between p-2 w-full">
                <h5>text goes here</h5>

                <span className="icon bg-primary text-lg font-bold text-white material-symbols-outlined">
                  chevron_right
                </span>
              </figcaption>
            </figure>
          </div>

          <div>
            <figure className="relative max-w-sm mx-auto cursor-pointer">
              <a href="#">
                <img className="rounded-lg" src={Lady} alt="image description" />
              </a>
              <figcaption className="absolute font-bold text-white bg-translucent bottom-0 rounded-b-lg flex justify-between p-2 w-full">
                <h5>text goes here</h5>

                <span className="icon bg-primary text-lg font-bold text-white material-symbols-outlined">
                  chevron_right
                </span>
              </figcaption>
            </figure>
          </div>
        </Carousel>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <figure className="relative max-w-sm mx-auto cursor-pointer">
            <a href="#">
              <img className="rounded-lg" src={Lady} alt="image description" />
            </a>
            <figcaption className="absolute font-bold text-white bg-translucent bottom-0 rounded-b-lg flex justify-between p-2 w-full">
              <h5>text goes here</h5>

              <span className="icon bg-primary text-lg font-bold text-white material-symbols-outlined">
                chevron_right
              </span>
            </figcaption>
          </figure>

          <figure className="relative max-w-sm mx-auto cursor-pointer">
            <a href="#">
              <img className="rounded-lg" src={Lady} alt="image description" />
            </a>
            <figcaption className="absolute font-bold text-white bg-translucent bottom-0 rounded-b-lg flex justify-between p-2 w-full">
              <h5>text goes here</h5>

              <span className="icon bg-primary text-lg font-bold text-white material-symbols-outlined">
                chevron_right
              </span>
            </figcaption>
          </figure>

          <figure className="relative max-w-sm mx-auto cursor-pointer">
            <a href="#">
              <img className="rounded-lg" src={Lady} alt="image description" />
            </a>
            <figcaption className="absolute font-bold text-white bg-translucent bottom-0 rounded-b-lg flex justify-between p-2 w-full">
              <h5>text goes here</h5>

              <span className="icon bg-primary text-lg font-bold text-white material-symbols-outlined">
                chevron_right
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
};

export default Business;


