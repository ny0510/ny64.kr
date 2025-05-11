import '@/index.css';
import { ThemeProvider } from '@/components/theme-provider';
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/home';

export function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
