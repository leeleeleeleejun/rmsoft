import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoteBooksPage from "@/pages/NoteBooksPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NoteBooksPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
