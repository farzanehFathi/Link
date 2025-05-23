import { Link, Outlet } from "react-router-dom";

const AdminPanel = () => {
  return (
    <div className="py-12">
      <div className="w-11/12 max-w-1800px mx-auto text-2xl">
        <div className="py-6 flex gap-4 align-middle">
          <Link
            to={"addproject"}
            className="py-1 px-6 bg-branding1 hover-effect"
          >
            Add A Project
          </Link>
          <Link
            to={"findprojects"}
            className="py-1 px-6 bg-branding1 hover-effect"
          >
            Find Projects
          </Link>
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default AdminPanel;
