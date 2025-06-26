import "./App.css"
import Nav from "./Navigation/Nav"
import ProductCard from "./Products/Product"
import Recomended from "./Recomended/Recomended"
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar/sidebar"
import { BrowserRouter } from 'react-router-dom';
import 'react-loading-skeleton/dist/skeleton.css'
const App = () => (
  <BrowserRouter>
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <Nav />
        <Routes>
          <Route path="/products" element={<ProductCard />} />
        </Routes>
      </main>
    </div>
  </BrowserRouter>
);


export default App
