import '@/index.css';
import { ThemeProvider } from '@/components/theme-provider';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import Home from '@/app/pages/home';
import { DXTransition } from '@/components/DXTransition';
import { TooltipProvider } from '@/components/ui/tooltip';

export function App() {
  return (
    <ThemeProvider>
      <TooltipProvider>
        <DXTransition />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;
