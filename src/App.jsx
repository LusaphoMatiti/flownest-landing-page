import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Featues from "./components/Featues";
import Works from "./components/howItWorks";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  // Smooth scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navbar />
      <Hero />
      <Featues />
      <Works />
      <CTA />
      <Footer />

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 middle bg-red-600 text-white p-5 rounded-full shadow-md hover:bg-red-700 focus:outline-none"
      >
        <img
          src="./arrow.png"
          className="w-7
        "
          alt="back to the top arrow"
        />
      </button>
    </>
  );
}

export default App;
