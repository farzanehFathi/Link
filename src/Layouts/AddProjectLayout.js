import { NavLink, Outlet } from "react-router-dom";

const AddProjectLayout = () => {
  return (
    <div>
      <div className="my-12 p-6 bg-branding2 flex text-xl">
        <div className="w-2/12">
          <NavLink className="block h-12 hover-effect" to="addprojectdetails">
            Add Project Details
          </NavLink>
          <NavLink
            className="block h-12 hover-effect"
            to="addprojectdescription"
          >
            Add Project Content
          </NavLink>
          <NavLink className="block h-12 hover-effect" to="addprojectimages">
            Add Project Images
          </NavLink>
        </div>
        <div className="w-9/12">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AddProjectLayout;
