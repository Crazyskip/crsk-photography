import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import AboutPage from "./pages/about/about.component";
import GalleryPage from "./pages/gallery/gallery.component";
import Header from "./components/header/header.component";
import CategoryPage from "./pages/category/category.component";
import PhotoPage from "./pages/photopage/photopage.component";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/gallery/:categoryName" element={<CategoryPage />} />
        <Route path="/gallery/:categoryName/:photoID" element={<PhotoPage />} />
      </Routes>
    </div>
  );
}

export default App;
