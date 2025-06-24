import "./App.css"
import Nav from "./Navigation/Nav"
import Product from "./Products/Product"
import Recomended from "./Recomended/Recomended"
import Sidebar from "./Sidebar/sidebar"
import { BrowserRouter } from 'react-router-dom';
import 'react-loading-skeleton/dist/skeleton.css'
const App = () => (
  <BrowserRouter>
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <Nav />
        {/* <Recomended /> */}
        <Product />
      </main>
    </div>
  </BrowserRouter>
);


export default App
