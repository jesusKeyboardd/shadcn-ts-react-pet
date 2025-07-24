import { CreateMore } from "./components/CreateMore";
import { CTA } from "./components/CTA";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";
import { Generate } from "./components/Generate";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Trending } from "./components/Trending";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <CreateMore />
      <Trending />
      <Gallery />
      <Generate />
      <Features />
      <CTA />
      <Footer />
    </>
  );
}
export default App;
