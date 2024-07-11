import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

import FilterForm from "../components/Projects/FilterForm";
import ImgContainer from "../components/ImgContainer";

const imageWidths = [
  "w-11/12 md:w-6/12",
  "w-11/12 md:w-4/12",
  "w-11/12 md:w-3/12",
  "w-11/12 md:w-6/12",
  "w-11/12 md:w-4/12",
  "w-11/12 md:w-5/12",
  "w-11/12 md:w-7/12",
  "w-11/12 md:w-4/12",
  "w-11/12 md:w-4/12",
  "w-11/12 md:w-7/12",
  "w-11/12 md:w-4/12",
  "w-11/12 md:w-4/12",
];

const Projects = () => {
  const titleMY = "my-1 md:my-3";
  const imgMaxHeight = "500px";

  const projects = useLoaderData();

  const [serviceFilter, setServiceFilter] = useState("All");
  const [sectorFilter, setSectorFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter((project) => {
    const matchesService =
      serviceFilter === "All"
        ? project
        : project.services.includes(serviceFilter);
    const matchesSector =
      sectorFilter === "All" ? project : project.sectors.includes(sectorFilter);

    const matchesSearch = project.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesService && matchesSector && matchesSearch;
  });

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
            title={serviceFilter !== "All" ? serviceFilter : "Services"}
            isOpen={false}
            options={[
              "All",
              "Architecture",
              "Interior Architecture",
              "Landscape",
              "Sustainability",
              "Transformation",
            ]}
            setFilter={setServiceFilter}
          />
        </div>
        <div className="group w-5/12 lg:w-4/12 relative border-b border-gray-500">
          <FilterForm
            title={sectorFilter !== "All" ? sectorFilter : "Sectors"}
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
            setFilter={setSectorFilter}
          />
        </div>
        <div className="w-full lg:w-4/12 flex justify-between border-b border-gray-500">
          <input
            type="search"
            placeholder="Search by project title"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block h-full grow text-black placeholder-black focus:outline-none "
          />
          <i class="fa-solid fa-magnifying-glass text-lg pt-1"></i>
        </div>
      </div>

      <div className="flex flex-wrap text-2xl lg:text-3xl">
        <div className="w-full flex flex-wrap justify-start gap-16 align-top pb-0 md:pb-20">
          {filteredProjects.length > 0 &&
            filteredProjects.map((project, index) => (
              <ImgContainer
                width={imageWidths[index]}
                url={"#"}
                img={project.image}
                imgMaxHeight={imgMaxHeight}
                alt={project.title}
                title={project.title}
                titleMY={titleMY}
                tagline={project.tagline}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
