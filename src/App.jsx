import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./pages/LandingPage/LandingPage";
import AboutHer from "./pages/About/AboutHer";
import Products from "./pages/Products/Products";
import Footer from "./components/Footer/Footer";
import Reviews from "./pages/Reviews/Reviews";
import ProductSubCategories from "./pages/ProductSubCategories/ProductSubCategories";
import IndividualProduct from "./pages/IndividualProduct/IndividualProduct";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutHer />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductSubCategories />} />
        <Route
          path="/products/:id/:productId"
          element={<IndividualProduct />}
        />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
