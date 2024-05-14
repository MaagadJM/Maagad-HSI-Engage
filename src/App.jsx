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
          <Route path="/" element={<Homepage />} />
          <Route path="about" element={<NewsAndBlog />} />
          <Route path="blogs" element={<BlogsAndEvent />} />
          <Route path="blog-details/:id" element={<BlogDetails />} />
          <Route path="inquiry" element={<Inquiry />} />
          <Route path="feedback" element={<Feedback />}>
            <Route path="form" element={<SurveyForm />} />
          </Route>
          <Route path="project" element={<Project />} />
          <Route path="login" element={<ProjectLogin />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
