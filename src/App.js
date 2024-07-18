import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// layouts
import RootLayout from "./Layouts/RootLayout";
import ProjectsLayout from "./Layouts/ProjectsLayout";
import AdminPanelLayout from "./Layouts/AdminPanelLayout";
import AddProjectLayout from "./Layouts/AddProjectLayout";

//Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

//Components
import FilteredProjects from "./components/Projects/FilteredProjects";
import AddProjectDetails from "./components/Admin/AddProjectDetails";
import AddProjectContent from "./components/Admin/AddProjectContent";
import AddProjectImages from "./components/Admin/AddProjectImages";

//Loaders
import { projectsLoader } from "./components/ProjectsLoader";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="projects"
        element={<ProjectsLayout />}
        loader={projectsLoader}
      >
        <Route index element={<Projects />} />
        <Route
          path=":filter"
          element={<FilteredProjects />}
          loader={projectsLoader}
        />
      </Route>

      <Route path="adminpanel" element={<AdminPanelLayout />}>
        <Route path="addproject" element={<AddProjectLayout />}>
          <Route path="addprojectdetails" element={<AddProjectDetails />} />
          <Route path="addprojectcontent" element={<AddProjectContent />} />
          <Route path="addprojectimages" element={<AddProjectImages />} />
        </Route>
      </Route>
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
