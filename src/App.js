import Navbar from "./components/Navbar";
import Journal from "./components/Journal";
import data from "./data";

export default function App() {
  const journals = data.map((item) => {
    return <Journal item={item} />;
  });
  return (
    <div>
      <Navbar />
      <div className="journals-container">{journals}</div>
    </div>
  );
}
