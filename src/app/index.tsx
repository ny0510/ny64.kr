import '@/index.css';
import { ThemeProvider } from '@/components/theme-provider';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import Home from './pages/home';

export function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
