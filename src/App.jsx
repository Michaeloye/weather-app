import "./App.css";
import BackgroundVideo from "./components/BackgroundVideo";
import rain from "./assets/rain.mp4";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <BackgroundVideo videoURL={rain} />
    </div>
  );
}

export default App;
