const Features = () => {
  return (
    <section className="font-bakbak bg-gray-100 flex items-center justify-center py-16 md:h-screen ">
      {/* Outer Container - changes direction based on screen size */}
      <div className="flex flex-col lg:flex-row justify-center items-center w-full max-w-6xl gap-8 px-4 sm:px-6">
        {/* Video Section - full width on mobile, fixed width on larger screens */}
        <div className="w-full max-w-md lg:w-80 rounded-lg overflow-hidden flex items-center justify-center">
          <video
            className="w-full h-auto object-cover"
            src="./todo-list.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        {/* Text Content Section - adjusts alignment based on screen size */}
        <div className="flex flex-col justify-center space-y-6 text-center lg:text-left w-full max-w-2xl">
          {/* Main Title - responsive font sizes */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800">
            Tools to Simplify Your Work
          </h1>

          <div className="space-y-4">
            {/* Feature 1 */}
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
                ✔️ Task boards for visual workflows
              </h2>
              <p className="text-base text-gray-600 sm:text-lg">
                Organize projects with drag-and-drop simplicity. See your entire
                workflow at a glance, no more digging through lists.
              </p>
            </div>

            {/* Feature 2 */}
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
                ✔️ Built-in time tracking
              </h2>
              <p className="text-base text-gray-600 sm:text-lg">
                Log hours effortlessly as you work. No switching apps, just
                focus, track, and invoice with confidence.
              </p>
            </div>

            {/* Feature 3 */}
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
                ✔️ Client-friendly progress sharing
              </h2>
              <p className="text-base text-gray-600 sm:text-lg">
                Share updates in one click. Clients see only what they need,
                without messy email threads.
              </p>
            </div>

            {/* Feature 4 */}
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
                ✔️ No clutter, just creativity
              </h2>
              <p className="text-base text-gray-600 sm:text-lg">
                A clean interface that stays out of your way. Spend less time
                managing tools, more time making things.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
