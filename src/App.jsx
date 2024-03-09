import { Routes, Route } from "react-router-dom";

//Layouts
import Layout from "./layouts/Layout";

//Pages
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import AuthorPage from "./pages/AuthorPage";
import PageNotFound from "./pages/404";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="blogs/:slug" element={<BlogPage />} />
          <Route path="authors/:slug" element={<AuthorPage />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
