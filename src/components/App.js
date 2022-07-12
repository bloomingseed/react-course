import Info from "./Info";
import About from "./About";
import Interests from "./Interests";
import Footer from "./Footer";
import "./../assets/stylesheets/App.css";

export default function App() {
  return (
    <div className="app">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}
