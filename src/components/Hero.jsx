import "../index.css";

const Hero = () => {
  return (
    <section className="relative h-screen">
      {" "}
      {/* Crucial: Set fixed height */}
      {/* Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          alt="Person working on a computer"
          className="w-full h-full object-cover"
          src="./working-on-computer.webp"
        />
      </div>
      {/* Overlay with CENTERED content */}
      <div className="absolute inset-0 bg-black bg-opacity-75 z-10 flex flex-col items-center justify-center px-4 sm:px-6">
        {" "}
        {/* Added flex-col */}
        <div className="text-white max-w-4xl w-full">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-left font-bakbak whitespace-nowrap overflow-x-auto md:overflow-visible">
            A minimalist web app for freelancers & creative teams to manage
            tasks,
          </p>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-left font-bakbak whitespace-nowrap overflow-x-auto md:overflow-visible">
            tasks, track time, and share progress with clients all in a clean,
          </p>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-left font-bakbak whitespace-nowrap overflow-x-auto md:overflow-visible mb-8">
            distraction-free workspace.
          </p>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-left font-bakbak whitespace-nowrap overflow-x-auto md:overflow-visible">
            Think Notion meets Trello, designed for focus.
          </p>
        </div>
        <button className="text-white bg-red-600 hover:bg-red-800 font-medium focus:outline-none focus:ring-red-300 rounded-lg text-lg px-8 py-3 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 mt-16">
          Join the Beta
        </button>
      </div>
    </section>
  );
};

export default Hero;
