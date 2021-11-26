import About from "./components/about/About";
import Banner from "./components/banner/Banner";
import Blog from "./components/blog/Blog";
import BookingForm from "./components/bookingform/BookingForm";
import Destination from "./components/destination/Destination";
import Footer from "./components/footer/Footer";
import Gallery from "./components/gallery/Gallery";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Review from "./components/review/Review";
import Service from "./components/service/Service";

function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <BookingForm/>
      <About/>
      <Destination/>
      <Service/>
      <Gallery/>
      <Review/>
      <Blog/>
      <Banner/>
      <Footer/>
    </div>
  );
}

export default App;
