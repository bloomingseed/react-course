import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

export default function App() {
  const cards = data.map(function (info) {
    return <Card key={info.id} item={info} />;
  });
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="cards-container">{cards}</div>
    </div>
  );
}
