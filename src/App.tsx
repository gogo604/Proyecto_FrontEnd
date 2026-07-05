import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { FontSizeProvider } from './context/FontSizeContext';
import { NebulaBackground } from './components/NebulaBackground/NebulaBackground';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';

import { Home } from './pages/Home/Home';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { Community } from './pages/Community/Community';
import { Library } from './pages/Library/Library';
import { Events } from './pages/Events/Events';
import { Gallery } from './pages/Gallery/Gallery';
import { MapPage } from './pages/MapPage/MapPage';
import { ApiExplorer } from './pages/ApiExplorer/ApiExplorer';
import { About } from './pages/About/About';
import { Contact } from './pages/Contact/Contact';

export default function App() {
  return (
    <ThemeProvider>
      <FontSizeProvider>
        <BrowserRouter>
          <div className="app-shell">
            <NebulaBackground />
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/comunidad" element={<Community />} />
              <Route path="/biblioteca" element={<Library />} />
              <Route path="/eventos" element={<Events />} />
              <Route path="/galeria" element={<Gallery />} />
              <Route path="/mapa" element={<MapPage />} />
              <Route path="/api" element={<ApiExplorer />} />
              <Route path="/nosotros" element={<About />} />
              <Route path="/contacto" element={<Contact />} />
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </FontSizeProvider>
    </ThemeProvider>
  );
}
