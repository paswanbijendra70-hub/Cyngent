import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AnimatedRoutes } from './components/AnimatedRoutes';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col font-body">
        <Navbar />
        <main className="flex-1">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
