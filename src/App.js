import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// layouts
import RootLayout from "./Layouts/RootLayout";
import AdminPanelLayout from "./Layouts/AdminPanelLayout";

//Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import AddProjectLayout from "./Layouts/AddProjectLayout";

//Components
import AddProjectDetails from "./components/Admin/AddProjectDetails";
import AddProjectDescription from "./components/Admin/AddProjectDescription";
import AddProjectImages from "./components/Admin/AddProjectImages";

//Loaders
import { projectsLoader } from "./components/ProjectsLoader";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="projects" element={<Projects />} loader={projectsLoader} />
      <Route path="adminpanel" element={<AdminPanelLayout />}>
        <Route path="addproject" element={<AddProjectLayout />}>
          <Route path="addprojectdetails" element={<AddProjectDetails />} />
          <Route
            path="addprojectdescription"
            element={<AddProjectDescription />}
          />
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
