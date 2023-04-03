import { BrowserRouter } from "react-router-dom";
import Carousel from "./components/Blogs/Carousel";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Offerings from "./components/Offerings/Offerings";
import TeamMember from "./components/TeamMember/TeamMember";

function App() {
  return (
    <BrowserRouter>
      <div className="max-w-[1440px] mx-auto" id="home">
        <Navbar></Navbar>
        <Header></Header>
        <Offerings></Offerings>
        <TeamMember></TeamMember>
        <Carousel></Carousel>
        <ContactUs></ContactUs>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
