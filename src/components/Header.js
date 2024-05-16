import { NavLink } from "react-router-dom";

const Heaader = () => {
  return (
    <div className="fixed top-0 left-0 bg-white w-full pt-5 pb-6 ">
      <div className="relevant w-90p max-w-1800px mx-auto">
        <div className="flex">
          <div className="w-27p mr-2">
            <NavLink to="/">
              <h1 className="text-2xl leading-none font-bold">
                Fari<span className="font-light">'s Diaries</span>
              </h1>
            </NavLink>
          </div>
          <div>
            <ul className="flex gap-4 lead-none text-lg ">
              <li>
                <NavLink to="/all-projects">All Projects</NavLink>
              </li>
              <li>
                <NavLink to="/architecture">Architecture</NavLink>
              </li>
              <li>
                <NavLink to="/development">Development</NavLink>
              </li>
              <li>
                <NavLink to="/content">Writings and Visuals</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heaader;
