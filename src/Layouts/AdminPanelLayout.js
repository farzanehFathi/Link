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
            Add Project
          </Link>
          <div className="py-1 px-1 bg-branding1 flex align-middle">
            <input
              className="w-96 focus:outline-none bg-branding1"
              type="search"
              placeholder="Find projet"
            />
            <i class="fa-solid fa-magnifying-glass text-lg px-2 block pt-[1px]"></i>
          </div>
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default AdminPanel;
