import StarRating from "./components/StarRating";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <StarRating starLimit={5} />
    </div>
  );
}
