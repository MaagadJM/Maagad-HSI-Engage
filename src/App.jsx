import Homepage from "./components/Homepage/Homepage";
import NewsAndBlog from "./components/pages/NewsAndBlogs/NewsAndBlog";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogsAndEvent from "./components/pages/blog/BlogsAndEvent";
import BlogDetails from "./components/pages/BlogsDetails/BlogDetails";
import Inquiry from "./components/pages/Inquiry/Inquiry";
import Feedback from "./components/pages/Feedback/Feedback";
import Project from "./components/pages/Project/Project";
import SurveyForm from "./components/pages/Feedback/Form/SurveyForm";
import ProjectLogin from "./components/pages/Project/Login/ProjectLogin";

function App() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center bg-[#f8fafb]">
      <BrowserRouter>
        <Routes>
          <Route path="/Maagad-HSI-Engage" element={<Homepage />} />
          <Route path="/Maagad-HSI-Engage/about" element={<NewsAndBlog />} />
          <Route path="/Maagad-HSI-Engage/blogs" element={<BlogsAndEvent />} />
          <Route path="/Maagad-HSI-Engage/blog-details/:id" element={<BlogDetails />} />
          <Route path="/Maagad-HSI-Engage/inquiry" element={<Inquiry />} />
          <Route path="/Maagad-HSI-Engage/feedback" element={<Feedback />}>
            <Route path="form" element={<SurveyForm />} />
          </Route>
          <Route path="/Maagad-HSI-Engage/project" element={<Project />} />
          <Route path="/Maagad-HSI-Engage/login" element={<ProjectLogin />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
