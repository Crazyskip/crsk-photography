import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import AboutPage from "./pages/aboutpage/aboutpage.component";
import GalleryPage from "./pages/gallerypage/gallerypage.component";
import Header from "./components/header/header.component";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </div>
  );
}

export default App;
