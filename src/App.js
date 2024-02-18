import "./App.css";
import Menu from "./layouts/Menu/MenuContainer";
import Home from "./pages/Home/Home";
import { VideoPlayerProvider } from "./components/videoPlayer/VideoPlayerContext";
function App() {
  return (
    <div className="body">
      {/* <Menu /> */}
      <Home />
    </div>
  );
}

export default App;
