import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AnimatedRoutes } from './components/AnimatedRoutes';
import { ThemeProvider } from './components/ThemeProvider';

export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="cyngent-theme">
      <BrowserRouter>
        <div className="min-h-screen flex flex-col font-body transition-colors duration-300">
          <Navbar />
          <main className="flex-1">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
