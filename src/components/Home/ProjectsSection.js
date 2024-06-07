import { Link } from "react-router-dom";
import SectionsPattern from "./SectionsPattern";

import Fllesskabets from "../../imgs/Home/F+ªllesskabets.jpg";
import Norrtälje from "../../imgs/Home/Norrtälje.jpg";
import Skolekvartalet from "../../imgs/Home/Skolekvartalet.jpg";
import Stovnertårnet from "../../imgs/Home/Stovnertårnet.jpg";

const ProjectsSection = () => {
  return (
    <div>
      <SectionsPattern
        content={
          <div className="flex flex-wrap w-11/12">
            <div className="w-8/12 px-4 pb-12">
              <Link>
                <div className="relative w-max">
                  <div className="bg-gray-800 z-50 absolute right-0 left-0 top-0 bottom-0 opacity-0 hover:opacity-40 transition-opacity ease-in-out delay-150"></div>
                  <img
                    className="object-fill"
                    src={Skolekvartalet}
                    alt="Ski school quarter"
                  />
                </div>
                <h3 className="text-3xl my-2">Ski school quarter</h3>
                <p className="text-lg">Urban development in the heart of Ski</p>
              </Link>
            </div>

            <div className="w-4/12 px-4 pb-12">
              <Link>
                <div className="relative ">
                  <div className="bg-gray-800 z-50 absolute right-0 left-0 top-0 bottom-0 opacity-0 hover:opacity-40 transition-opacity ease-in-out delay-150"></div>
                  <img src={Norrtälje} alt="Norrtälje Mortuary" />{" "}
                </div>
                <h3 className="text-3xl my-2">Norrtälje Mortuary</h3>
                <p className="text-lg">
                  Tasteful design for a dignified farewell
                </p>
              </Link>
            </div>

            <div className="w-5/12 px-6 py-12">
              <Link>
                <div className="relative">
                  <div className="bg-gray-800 z-50 absolute right-0 left-0 top-0 bottom-0 opacity-0 hover:opacity-40 transition-opacity ease-in-out delay-150"></div>
                  <img src={Fllesskabets} alt="Fællesskabets Hus" />{" "}
                </div>
                <h3 className="text-3xl my-2">Fællesskabets Hus</h3>
                <p className="text-lg">A space for care and domesticity</p>
              </Link>
            </div>

            <div className="w-7/12 px-6 py-12">
              <Link>
                <div className="relative w-max">
                  <div className="bg-gray-800 z-50 absolute right-0 left-0 top-0 bottom-0 opacity-0 hover:opacity-40 transition-opacity ease-in-out delay-150"></div>
                  <img
                    src={Stovnertårnet}
                    alt="Stovnertårnet - Stovner tower"
                  />{" "}
                </div>
                <h3 className="text-3xl my-2">Stovnertårnet - Stovner tower</h3>
                <p className="text-lg">
                  Norway's most inclusive landscape project
                </p>
              </Link>
            </div>
          </div>
        }
        title={"Projects"}
        url={"projects"}
      />
    </div>
  );
};

export default ProjectsSection;
