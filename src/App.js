import { Collage2 } from "./Components/Collage2/Collage2";
import { Collage3 } from "./Components/Collage3/Collage3";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { Navbar } from "./Components/Navbar/Navbar";
import { Section1 } from "./Components/Section1/Section1";
import { Section10 } from "./Components/Section10/Section10";
import { Section2 } from "./Components/Section2/Section2";
import { Section5 } from "./Components/Section5/Section5";
import { Section6 } from "./Components/Section6/Section6";
import { Section7 } from "./Components/Section7/Section7";
import { Section9 } from "./Components/Section9/Section9";
import { VideoSection } from "./Components/VideoSection/VideoSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Section1 />
      <Section2 />
      <VideoSection />
      <Collage2 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Collage3 />
      <Section9 />
      <Section10 />
      <Footer />
    </div>
  );
}

export default App;
