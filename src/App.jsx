import { Routes, Route } from "react-router-dom";

//Layouts
import Layout from "./layouts/Layout";

//Pages
import HomePage from "./pages/HomePage";
import BlogsPage from "./pages/BlogsPage";
import AuthorPage from "./pages/AuthorPage";
import BlogPage from "./pages/BlogPage";
import AuthorsPage from "./pages/AuthorsPage";
import BookmarkPage from "./pages/BookmarkPage";
import PageNotFound from "./pages/404";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="blogs" element={<BlogsPage />} />
          <Route path="blogs/:slug" element={<BlogPage />} />
          <Route path="authors" element={<AuthorsPage />} />
          <Route path="authors/:slug" element={<AuthorPage />} />
          <Route path="bookmarks" element={<BookmarkPage />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
