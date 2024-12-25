import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div className="bg-base-100 mb-10 mt-3 md:mt-5 rounded-2xl border-2">
      <div className="flex flex-col lg:flex-row-reverse justify-between items-center gap-10 p-5 md:p-8">
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="/banner.jpg"
            alt="Explore Asia"
            className="rounded-lg shadow-2xl w-full h-auto object-cover"
          />
        </div>

        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold">
              <Typewriter
                words={[
                  "Explore the Wonders of Asia!",
                  "Plan Your Adventure Today!",
                  "Discover Stunning Destinations!",
                ]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h1>
            <p className="py-6 text-gray-700 leading-relaxed">
              Dive into the vibrant cultures, breathtaking landscapes, and rich
              histories of Asia. From serene beaches to ancient temples, there's
              an adventure for everyone!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
