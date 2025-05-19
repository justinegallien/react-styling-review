import "./App.scss";
import Footer from "./Components/Footer";

import HeaderNav from "./Components/Header";
import PhotoCarousel from "./Components/PhotoCarousel";

function App() {
  return (
    <>
      <HeaderNav />
      <main>
        <h1 className="flashing">Photo Gallery</h1>
        <PhotoCarousel />
        <h2>I Came. I Saw. I Captured. </h2>
      </main>
      <Footer />
    </>
  );
}

export default App;
