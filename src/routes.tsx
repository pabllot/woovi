import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FirstPage } from "./pages/FirstPage";
import { SecondPage } from "./pages/SecondPage";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/2" element={<SecondPage />} />
      </Routes>
    </BrowserRouter>
  );
};
