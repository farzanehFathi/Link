import { Link } from "react-router-dom";

import FilterForm from "../components/Projects/FilterForm";
import ImgContainer from "../components/ImgContainer";

import Fllesskabets from "../imgs/Home/F+ªllesskabets.jpg";
import Norrtälje from "../imgs/Home/Norrtälje.jpg";
import Skolekvartalet from "../imgs/Home/Skolekvartalet.jpg";
import Stovnertårnet from "../imgs/Home/Stovnertårnet.jpg";

const Projects = () => {
  const titleMY = "my-1 md:my-3";

  return (
    <div className="w-11/12 max-w-1800px mx-auto text-2xl">
      <div className="my-3 text-sm">
        <Link to="/"> Home</Link>{" "}
        <i className="fa-solid fa-chevron-right text-[10px]"></i>{" "}
        <p className="inline">Projects</p>
      </div>

      <h2 className="text-6xl my-12">Projects</h2>

      <div className="my-12 flex-nowrap lg:flex lg:gap-10 align-bottom">
        <div
          className=" group w-5/12 lg:w-4/12 relative border-b border-gray-500
         "
        >
          <FilterForm
            title="Services"
            isOpen={false}
            options={[
              "All",
              "Architecture",
              "Interior Architecture",
              "Landscape",
              "Sustainability",
              "Transformation",
            ]}
          />
        </div>
        <div className="group w-5/12 lg:w-4/12 relative border-b border-gray-500">
          <FilterForm
            title="Sectors"
            isOpen={false}
            options={[
              "All",
              "Commertial",
              "Culture",
              "Education",
              "Hospitals",
              "Industry",
              "Residential",
              "Urban Development",
            ]}
          />
        </div>
        <div className="w-full lg:w-4/12 flex justify-between border-b border-gray-500">
          <input
            type="search"
            placeholder="Search by project title"
            className="block h-full grow text-black placeholder-black focus:outline-none "
          />
          <i class="fa-solid fa-magnifying-glass text-lg pt-1"></i>
        </div>
      </div>

      <div className="flex flex-wrap text-2xl lg:text-3xl">
        <div className="w-full flex flex-wrap md:flex-nowrap justify-between align-top pb-0 md:pb-20">
          <ImgContainer
            width={"w-11/12 md:w-8/12"}
            url={"#"}
            img={Skolekvartalet}
            alt={"Ski school quarter"}
            title={"Ski school quarter"}
            titleMY={titleMY}
            description={"Urban development in the heart of Ski"}
          />

          <ImgContainer
            width={"w-11/12 md:w-4/12"}
            url={"#"}
            img={Norrtälje}
            alt={"Norrtälje Mortuary"}
            title={"Norrtälje Mortuary"}
            titleMY={titleMY}
            description={"Tasteful design for a dignified farewell"}
          />
        </div>
        <div className="w-full flex flex-wrap justify-between align-top">
          <ImgContainer
            width={"w-11/12 md:w-4/12"}
            url={"#"}
            img={Fllesskabets}
            alt={"Fællesskabets Hus"}
            title={"Fællesskabets Hus"}
            titleMY={titleMY}
            description={"A space for care and domesticity"}
          />
          <ImgContainer
            width={"w-11/12 md:w-7/12"}
            url={"#"}
            img={Stovnertårnet}
            alt={"Stovnertårnet - Stovner tower"}
            title={"Stovnertårnet - Stovner tower"}
            titleMY={titleMY}
            description={" Norway's most inclusive landscape project"}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
