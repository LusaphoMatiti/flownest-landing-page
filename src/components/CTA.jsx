const CTA = () => {
  return (
    <section className="py-16 md:h-screen bg-white flex items-center justify-center mb-8 mt-8">
      {/* Outer Container */}
      <div className="relative width-100">
        <div className="absolute inset-0 bg-black bg-opacity-75 z-10 flex flex-col items-center justify-center px-4 sm:px-6 rounded-2xl ">
          {" "}
          {/* Added flex-col */}
          <div className="text-white max-w-4xl w-full">
            <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-left font-bakbak whitespace-nowrap overflow-x-auto md:overflow-visible">
              Ready to Simplify Your Creative Workflow?
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-left font-bakbak whitespace-nowrap overflow-x-auto md:overflow-visible">
              Join thousands of freelancers and
            </p>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-left font-bakbak whitespace-nowrap overflow-x-auto md:overflow-visible mb-8">
              teams who focus on creating not
            </p>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-left font-bakbak whitespace-nowrap overflow-x-auto md:overflow-visible">
              organizing.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl mt-8 lg:text-3xl text-left font-bakbak whitespace-nowrap overflow-x-auto md:overflow-visible">
              → Try FlowNest Free for 7 Days.
            </p>
          </div>
          <button className="text-white bg-red-600 hover:bg-red-800 font-medium focus:outline-none focus:ring-red-300 rounded-lg text-lg px-8 py-3 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 mt-16">
            Join the Beta
          </button>
        </div>

        {/* Image */}
        <img
          alt="Person working on a computer"
          className="w-full h-auto object-cover rounded-2xl"
          src="./working-from-home.webp"
        />
      </div>
    </section>
  );
};
export default CTA;
