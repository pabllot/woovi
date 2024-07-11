import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FirstPage } from "./pages/FirstPage";
import { SecondPage } from "./pages/SecondPage";
import { ThirdPage } from "./pages/ThirdPage";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/1" element={<FirstPage />} />
        <Route path="/2" element={<SecondPage />} />
        <Route path="/3" element={<ThirdPage />} />
      </Routes>
    </BrowserRouter>
  );
};
