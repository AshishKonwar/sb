import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Pricing from "./pages/Pricing";
import Orders from "./pages/Orders";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Quotation from "./pages/Quotation";
import Footer from "./components/Footer";

// Route configuration object for better maintainability
const routes = [
  { path: "/", element: <Home />, title: "Home" },
  { path: "/contact", element: <Contact />, title: "Contact" },
  { path: "/quotation", element: <Quotation />, title: "Quotation" },
  // { path: "/services", element: <Services />, title: "Services" },
  // { path: "/products", element: <Products />, title: "Products" },
  // { path: "/pricing", element: <Pricing />, title: "Pricing" },
  // { path: "/orders", element: <Orders />, title: "Orders" },
  // { path: "/about", element: <About />, title: "About" },
  // { path: "/contact", element: <Contact />, title: "Contact" },
];

export default function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          {routes.map(({ path, element, title }) => (
            <Route 
              key={path} 
              path={path} 
              element={element}
            />
          ))}
        </Routes>
      </MainLayout>
            <Footer />
    
    </Router>
  );
}
