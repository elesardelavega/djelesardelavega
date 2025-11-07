import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './ThemeProvider'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { LegalPage } from './pages/LegalPage'

// páginas
import { AboutPage } from './pages/About'
import { MusicPage } from './pages/Music'
import { GalleryPage } from './pages/Gallery'
import { ContactPage } from './pages/Contact'
import { HomePage } from './pages/Home'
import { PrivacyPolicyPage } from './pages/footer/PrivacyPolicy';
import { TermsOfServicePage } from './pages/footer/TermsOfService';
import { CookiePolicyPage } from './pages/footer/CookiePolicy';

function App() {
  return (
    <ThemeProvider>
      <Router>

        <div className="flex flex-col min-h-screen">
          <Header />

          <div className="mx-auto max-w-[1440px] flex-grow w-full">
            <main>

              <Routes>

                {/* páginas */}
                <Route path="/" element={<HomePage />} />

                <Route path="/sobre-mi" element={<AboutPage />} />
                <Route path="/musica" element={<MusicPage />} />
                <Route path="/galeria" element={<GalleryPage />} />
                <Route path="/contacto" element={<ContactPage />} />

                {/* 💡 RUTAS LEGALES*/}
                <Route path="/politica-privacidad" element={<PrivacyPolicyPage />} />
                <Route path="/terminos-servicio" element={<TermsOfServicePage />} />
                <Route path="/politica-cookies" element={<CookiePolicyPage />} />

                {/* error 404 */}
                <Route path="*" element={<div className="p-8"><h1>404 | Página no encontrada</h1></div>} />

              </Routes>
            </main>
          </div>

          <Footer />
        </div>

      </Router>
    </ThemeProvider>
  );
}

export default App;
