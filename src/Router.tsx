import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoteBooksPage from "@/pages/NoteBooksPage";
import Layout from "@/components/common/Layout";
import NoteBookPage from "./pages/NoteBookPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<NoteBooksPage />} />
          <Route path="/:noteID" element={<NoteBookPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
