import { Carousel, IconButton } from '@material-tailwind/react';
import banner1 from '/assets/images/banner/5.jpg';
import banner2 from '/assets/images/banner/1.jpg';
import banner3 from '/assets/images/banner/2.jpg';
import banner5 from '/assets/images/banner/3.jpg';
import banner4 from '/assets/images/banner/4.jpg';
import banner6 from '/assets/images/banner/6.jpg';

export function Banner() {
  return (
    <div className="h-[600px] w-full container mx-auto mt-5">
      <Carousel
        className="h-full w-full rounded-2xl"
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handlePrev}
            className="!absolute bottom-10 right-32 active:bg-orange-700 disabled:opacity-100  rounded-full p-8 -translate-y-2/4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handleNext}
            className="!absolute !active:bg-[#FF3811] bottom-10 right-16 rounded-full p-8 -translate-y-2/4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </IconButton>
        )}
      >
        <div className="w-full h-full relative">
          <img
            src={banner1}
            alt="image 1"
            className="h-full w-full object-cover rounded-2xl"
          />
          <div className="inset-0 bg-gradient-to-r from-gray-900 to-transparent absolute"></div>
          <div className="inset-0  text-white absolute">
            <div className="w-full pl-5 md:pl-32 h-full border flex justify-center flex-col gap-5">
              {' '}
              <h1 className="text-6xl font-extra-bold">
                Affordable <br /> Price For Car <br /> Servicing
              </h1>
              <p>
                There are many variations of passages of available, <br /> but
                the majority have suffered alteration in some form
              </p>
              <div>
                <button className="btn mr-4 text-white bg-[#FF3811]">
                  Discover More
                </button>
                <button className="btn text-white bg-opacity-0 border">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full relative">
          <img
            src={banner2}
            alt="image 1"
            className="h-full w-full object-cover rounded-2xl"
          />
          <div className="inset-0 bg-gradient-to-r from-gray-900 to-transparent absolute"></div>
          <div className="inset-0  text-white absolute">
            <div className="w-full pl-5 md:pl-32 h-full border flex justify-center flex-col gap-5">
              {' '}
              <h1 className="text-6xl font-extra-bold">
                Affordable <br /> Price For Car <br /> Servicing
              </h1>
              <p>
                There are many variations of passages of available, <br /> but
                the majority have suffered alteration in some form
              </p>
              <div>
                <button className="btn mr-4 text-white bg-[#FF3811]">
                  Discover More
                </button>
                <button className="btn text-white bg-opacity-0 border">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full relative">
          <img
            src={banner3}
            alt="image 1"
            className="h-full w-full object-cover rounded-2xl"
          />
          <div className="inset-0 bg-gradient-to-r from-gray-900 to-transparent absolute"></div>
          <div className="inset-0  text-white absolute">
            <div className="w-full pl-5 md:pl-32 h-full border flex justify-center flex-col gap-5">
              {' '}
              <h1 className="text-6xl font-extra-bold">
                Affordable <br /> Price For Car <br /> Servicing
              </h1>
              <p>
                There are many variations of passages of available, <br /> but
                the majority have suffered alteration in some form
              </p>
              <div>
                <button className="btn mr-4 text-white bg-[#FF3811]">
                  Discover More
                </button>
                <button className="btn text-white bg-opacity-0 border">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full relative">
          <img
            src={banner4}
            alt="image 1"
            className="h-full w-full object-cover rounded-2xl"
          />
          <div className="inset-0 bg-gradient-to-r from-gray-900 to-transparent absolute"></div>
          <div className="inset-0  text-white absolute">
            <div className="w-full pl-5 md:pl-32 h-full border flex justify-center flex-col gap-5">
              {' '}
              <h1 className="text-6xl font-extra-bold">
                Affordable <br /> Price For Car <br /> Servicing
              </h1>
              <p>
                There are many variations of passages of available, <br /> but
                the majority have suffered alteration in some form
              </p>
              <div>
                <button className="btn mr-4 text-white bg-[#FF3811]">
                  Discover More
                </button>
                <button className="btn text-white bg-opacity-0 border">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full relative">
          <img
            src={banner5}
            alt="image 1"
            className="h-full w-full object-cover rounded-2xl"
          />
          <div className="inset-0 bg-gradient-to-r from-gray-900 to-transparent absolute"></div>
          <div className="inset-0  text-white absolute">
            <div className="w-full pl-5 md:pl-32 h-full border flex justify-center flex-col gap-5">
              {' '}
              <h1 className="text-6xl font-extra-bold">
                Affordable <br /> Price For Car <br /> Servicing
              </h1>
              <p>
                There are many variations of passages of available, <br /> but
                the majority have suffered alteration in some form
              </p>
              <div>
                <button className="btn mr-4 text-white bg-[#FF3811]">
                  Discover More
                </button>
                <button className="btn text-white bg-opacity-0 border">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full relative">
          <img
            src={banner6}
            alt="image 1"
            className="h-full w-full object-cover rounded-2xl"
          />
          <div className="inset-0 bg-gradient-to-r from-gray-900 to-transparent absolute"></div>
          <div className="inset-0  text-white absolute">
            <div className="w-full pl-5 md:pl-32 h-full border flex justify-center flex-col gap-5">
              {' '}
              <h1 className="text-6xl font-extra-bold">
                Affordable <br /> Price For Car <br /> Servicing
              </h1>
              <p>
                There are many variations of passages of available, <br /> but
                the majority have suffered alteration in some form
              </p>
              <div>
                <button className="btn mr-4 text-white bg-[#FF3811]">
                  Discover More
                </button>
                <button className="btn text-white bg-opacity-0 border">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
