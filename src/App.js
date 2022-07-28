import { Header } from "./Components/Header/Header";
import { Navbar } from "./Components/Navbar/Navbar";
import { Section1 } from "./Components/Section1/Section1";
import { Section2 } from "./Components/Section2/Section2";
import { VideoSection } from "./Components/VideoSection/VideoSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Section1 />
      <Section2 />
      <VideoSection />
    </div>
  );
}

export default App;
