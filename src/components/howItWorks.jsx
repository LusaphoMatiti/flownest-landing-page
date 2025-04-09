const howItWorks = () => {
  return (
    <section className="font-bakbak bg-gray-50  py-16 md:h-screen">
      {/* Title */}
      <h1 className="text-4xl pb-20 sm:text-5xl md:text-6xl font-bold text-gray-800 text-center">
        Effortless workflow, Step by Step
      </h1>

      {/* Grid Container */}
      <div className="max-w-6xl mx-auto px-4">
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Block 1 */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-bold text-gray-800">
              Set Up in Seconds
            </h2>
            <p className="text-gray-600">
              → Create a project, add tasks, and invite your team or clients, no
              steep learning curve.
            </p>
          </div>

          {/* Block 2 */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-bold text-gray-800">Work Visually</h2>
            <p className="text-gray-600">
              → Drag tasks across your board (To Do → Doing → Done) or customize
              workflows to fit your creative process.
            </p>
          </div>

          {/* Block 3 */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-bold text-gray-800">
              Track Time Automatically
            </h2>
            <p className="text-gray-600">
              → Toggle the built-in timer as you work. Hours sync to reports for
              painless invoicing.
            </p>
          </div>

          {/* Block 4 */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-bold text-gray-800">
              Share Progress Effortlessly
            </h2>
            <p className="text-gray-600">
              → Generate client-ready updates with one click. No more endless
              status meetings.
            </p>
          </div>

          {/* Block 5 */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-bold text-gray-800">
              Stay in the Flow
            </h2>
            <p className="text-gray-600">
              → Focus on creating while FlowNest handles the busywork.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default howItWorks;
