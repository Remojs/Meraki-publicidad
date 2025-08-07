import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@shared/contexts/ThemeContext";
import { LanguageProvider } from "@shared/contexts/LanguageContext";
import { ToastProvider } from "@shared/components/Toast";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const App = () => (
  <ToastProvider>
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  </ToastProvider>
);

export default App;
