import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoteBooksPage from "@/pages/NoteBooksPage";
import Layout from "@/components/common/Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<NoteBooksPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
