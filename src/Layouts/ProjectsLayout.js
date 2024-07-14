import { useState, useEffect } from "react";
import {
  Link,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import queryString from "query-string";

import Projects from "../pages/Projects";

import FilterForm from "../components/Projects/FilterForm";
import FilteredProjects from "../components/Projects/FilteredProjects";

const titleMY = "my-1 md:my-3";

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

const imgMaxHeights = [
  "500px",
  "500px",
  "500px",
  "500px",
  "300px",
  "300px",
  "500px",
  "500px",
  "500px",
  "500px",
  "300px",
  "300px",
];

const ProjectsLayout = () => {
  const projects = useLoaderData();
  const location = useLocation();
  const navigate = useNavigate();

  const [serviceFilter, setServiceFilter] = useState(null);
  const [sectorFilter, setSectorFilter] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const queryParams = queryString.parse(location.search);

    if (queryParams.Services) {
      setServiceFilter(queryParams.Services);
    } else {
      setServiceFilter("All");
    }

    if (queryParams.Sectors) {
      setSectorFilter(queryParams.Sectors);
    } else {
      setSectorFilter("All");
    }

    if (queryParams.search) {
      setSearchQuery(queryParams.search);
    } else {
      setSearchQuery("");
    }
  }, [location.search]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    const filterParams = new URLSearchParams({
      ...queryString.parse(location.search),
      search: searchQuery.trim(),
    }).toString();

    navigate(`?${filterParams}`, { replace: true });
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

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
            filterID="Services"
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
            currentFilters={{
              ...(location.search && queryString.parse(location.search)),
            }}
          />
        </div>
        <div className="group w-5/12 lg:w-4/12 relative border-b border-gray-500">
          <FilterForm
            filterID="Sectors"
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
            currentFilters={{
              ...(location.search && queryString.parse(location.search)),
            }}
          />
        </div>
        <div className="w-full lg:w-4/12 flex justify-between border-b border-gray-500">
          <form onSubmit={handleSearchSubmit} className="w-full">
            <input
              type="search"
              placeholder="Search by project title"
              value={searchQuery}
              onChange={handleInputChange}
              className="block w-full h-full grow text-black placeholder-black focus:outline-none [&::-webkit-search-cancel-button]:hidden"
            />
          </form>
          <i class="fa-solid fa-magnifying-glass text-lg pt-1"></i>
        </div>
      </div>

      {serviceFilter !== "All" ||
      sectorFilter !== "All" ||
      searchQuery !== "" ? (
        <FilteredProjects
          projects={projects}
          titleMY={titleMY}
          imageWidths={imageWidths}
          imgMaxHeights={imgMaxHeights}
          serviceFilter={serviceFilter}
          sectorFilter={sectorFilter}
          searchQuery={searchQuery}
        />
      ) : (
        <Projects
          projects={projects}
          titleMY={titleMY}
          imageWidths={imageWidths}
          imgMaxHeights={imgMaxHeights}
        />
      )}
    </div>
  );
};

export default ProjectsLayout;
