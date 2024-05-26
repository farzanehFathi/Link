import { NavLink } from "react-router-dom";

const Heaader = () => {
  return (
    <div className="fixed top-0 left-0 bg-white w-full pt-5 pb-6 z-3000">
      <div className="relevant w-11/12 max-w-1800px mx-auto">
        <div className="flex justify-between">
          <div className="w-3/12 md:w-5/12 xl:w-6/12 mr-2">
            <NavLink to="/">
              <h1 className="text-3xl leading-none font-bold">
                LINK<span className="font-light"> Arkitectur</span>
              </h1>
            </NavLink>
          </div>
          <div className="not-mobile w-8/12 flex justify-between items-center">
            <ul className="flex gap-4 lead-none text-lg w-9/12">
              <li className="hover-effect">
                <NavLink to="/projects">Projects</NavLink>
              </li>
              <li className="hover-effect">
                <NavLink to="/services">Services</NavLink>
              </li>
              <li className="hover-effect">
                <NavLink to="/sustainability">Sustainability</NavLink>
              </li>
              <li className="hover-effect">
                <NavLink to="/about">About</NavLink>
              </li>
              <li className="hover-effect">
                <NavLink to="/career">Career</NavLink>
              </li>
              <li className="hover-effect">
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
            <div className="flex gap-4">
              <div>🔍</div>
              <div>EN</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heaader;
