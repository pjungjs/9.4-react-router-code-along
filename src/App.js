import { Route, Routes } from 'react-router-dom'
import Footer from './components/common/footer.js'
import Header from './components/common/header'
import Nav from './components/common/nav'
import About from './components/pages/about'
import Home from './components/pages/home'
import Newsletter from './components/pages/newsletter'
import ProductList from './components/products/productList'
import Product from './components/products/product'

import lamps from './data/lamps.json'
import candles from './data/candles.json'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/newsletter" element={<Newsletter />} />
            
            <Route path="/lamps" element={<ProductList products={lamps} productType={'Lamps'} />} />
            <Route path="/lamps/:type" element={<ProductList products={lamps} productType={'Lamps'} />} />
            <Route path="/lamps/:type/:id" element={<Product products={lamps} />} />
            
            <Route path="/candles" element={<ProductList products={candles} productType={'Candles'} />} />
            <Route path="/candles/:type" element={<ProductList products={candles} productType={'Candles'} />} />
            <Route path="/candles/:type/:id" element={<Product products={candles} />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
