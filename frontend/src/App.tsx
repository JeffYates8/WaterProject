import './App.css'
import CartPage from './components/CartPage';
import { CartProvider } from './context/CartContext';

import DonatePage from './pages/DonatePage';
import ProjectsPage from './pages/ProjectPages'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<ProjectsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/donate/:projectName/:projectId" element={<DonatePage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </Router>
      </CartProvider>
    </>
  )
}

export default App
