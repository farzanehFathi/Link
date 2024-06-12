import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";

const Heaader = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 bg-white w-full pt-5 pb-6 z-3000">
      <div className="relevant w-11/12 max-w-1800px mx-auto">
        <div className="flex justify-between">
          <div className="w-5/12 xl:w-6/12 mr-2 relative">
            <NavLink to="/">
              <h1 className="text-3xl leading-none font-bold ">
                LINK<span className="font-light"> Arkitectur</span>
              </h1>
            </NavLink>
          </div>
          {/* MOBILE ONLY */}

          <div className="lg:hidden flex gap-4 content-end items-center text-lg">
            <div>
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className={`scale-[0.7] z-3000 ${isOpen ? "text-white" : ""}`}>
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
          </div>

          {isOpen ? (
            <div className="bg-branding4 text-white fixed top-0 bottom-0 right-0 left-0">
              <div className="fixed top-0 left-0 w-full pt-5 pb-6 z-3000">
                <div className="relevant w-11/12 max-w-1800px mx-auto">
                  <div className="flex justify-between">
                    <div className="w-5/12 xl:w-6/12 mr-2">
                      <NavLink to="/">
                        <h1 className="text-3xl leading-none font-bold ">
                          LINK<span className="font-light"> Arkitectur</span>
                        </h1>
                      </NavLink>
                    </div>
                    <div className="lg:hidden flex gap-4 content-end items-center text-lg">
                      <div>
                        <i class="fa-solid fa-magnifying-glass"></i>
                      </div>
                      <div className="opacity-0">
                        <Hamburger />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relevant w-11/12 max-w-1800px mx-auto">
                  <Link to="#" className="text-5xl mt-10 block hover-effect">
                    Projects
                  </Link>
                  <Link to="#" className="text-5xl  block hover-effect">
                    Services
                  </Link>
                  <Link to="#" className="text-5xl block hover-effect">
                    Sustainability
                  </Link>
                  <Link to="#" className="text-5xl block hover-effect">
                    About
                  </Link>
                  <Link to="#" className="text-5xl block hover-effect">
                    Career
                  </Link>
                  <Link to="#" className="text-5xl block hover:opacity-50">
                    Contect
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="hidden"></div>
          )}

          {/* DESKTOP ONLY */}
          <div className="hidden lg:flex w-8/12 justify-between items-center">
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
            <div className="flex gap-4 content-end items-center text-lg">
              <div>
                <i class="fa-solid fa-magnifying-glass"></i>
              </div>

              <div>EN</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heaader;
