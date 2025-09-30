import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/products/Products"; // ✅ Capitalized filename
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup"; // ✅ Import Popup

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup); // ✅ always open popup on click
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar  handleOrderPopup={handleOrderPopup}/>
      <Hero handleOrderPopup={handleOrderPopup}/>
{/* 
      Example button to open popup
      <div className="text-center my-8">
        <button
          onClick={handleOrderPopup}
          className="px-6 py-3 bg-primary text-white rounded-lg shadow-md hover:opacity-90 duration-200"
        >
          Order Now
        </button>
      </div> */}

      <Products />
      <TopProducts handleOrderPopup={handleOrderPopup}/>
      <Banner />
      <Subscribe />
      <Products />
      <Testimonials />
      <Footer />

      {/* Popup */}
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
};

export default App;
