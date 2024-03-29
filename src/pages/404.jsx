import { useScrollToTop } from "../hooks/useScrollToTop";

//Images
import pageNotFound from "../assets/404.png";

function PageNotFound() {
  useScrollToTop();
  return (
    <div style={{ height: "1000px", textAlign: "center" }}>
      <img src={pageNotFound} alt="pageNotFound" style={{ width: "90%" }} />
    </div>
  );
}

export default PageNotFound;
