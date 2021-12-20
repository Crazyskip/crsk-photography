import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import AboutPage from "./pages/about/about.component";
import GalleryPage from "./pages/gallery/gallery.component";
import Header from "./components/header/header.component";
import CategoryPage from "./pages/category/category.component";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/gallery/:categoryName" element={<CategoryPage />} />
      </Routes>
    </div>
  );
}

export default App;
