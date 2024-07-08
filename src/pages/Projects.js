import { Link, useLoaderData } from "react-router-dom";

import FilterForm from "../components/Projects/FilterForm";
import ImgContainer from "../components/ImgContainer";

const Projects = () => {
  const titleMY = "my-1 md:my-3";
  const imgMaxHeight = "500px";

  const projects = useLoaderData();

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
        <div className="w-full flex flex-wrap justify-start gap-16 align-top pb-0 md:pb-20">
          <ImgContainer
            width={"w-11/12 md:w-6/12"}
            url={"#"}
            img={projects[0].image}
            imgMaxHeight={imgMaxHeight}
            alt={projects[0].title}
            title={projects[0].title}
            titleMY={titleMY}
            tagline={projects[0].tagline}
          />

          <ImgContainer
            width={"w-11/12 md:w-4/12"}
            url={"#"}
            img={projects[1].image}
            imgMaxHeight={imgMaxHeight}
            alt={projects[1].title}
            title={projects[1].title}
            titleMY={titleMY}
            tagline={projects[1].tagline}
          />

          <ImgContainer
            width={"w-11/12 md:w-3/12"}
            url={"#"}
            img={projects[2].image}
            imgMaxHeight={imgMaxHeight}
            alt={projects[2].title}
            title={projects[2].title}
            titleMY={titleMY}
            tagline={projects[2].tagline}
          />
          <ImgContainer
            width={"w-11/12 md:w-6/12"}
            url={"#"}
            img={projects[3].image}
            imgMaxHeight={imgMaxHeight}
            alt={projects[3].title}
            title={projects[3].title}
            titleMY={titleMY}
            tagline={projects[3].tagline}
          />

          <ImgContainer
            width={"w-11/12 md:w-4/12"}
            url={"#"}
            img={projects[4].image}
            imgMaxHeight={imgMaxHeight}
            alt={projects[4].title}
            title={projects[4].title}
            titleMY={titleMY}
            tagline={projects[4].tagline}
          />
          <ImgContainer
            width={"w-11/12 md:w-5/12"}
            url={"#"}
            img={projects[5].image}
            imgMaxHeight={imgMaxHeight}
            alt={projects[5].title}
            title={projects[5].title}
            titleMY={titleMY}
            tagline={projects[5].tagline}
          />

          <ImgContainer
            width={"w-11/12 md:w-7/12"}
            url={"#"}
            img={projects[6].image}
            imgMaxHeight={imgMaxHeight}
            alt={projects[6].title}
            title={projects[6].title}
            titleMY={titleMY}
            tagline={projects[6].tagline}
          />

          <ImgContainer
            width={"w-11/12 md:w-4/12"}
            url={"#"}
            img={projects[7].image}
            imgMaxHeight={imgMaxHeight}
            alt={projects[7].title}
            title={projects[7].title}
            titleMY={titleMY}
            tagline={projects[7].tagline}
          />

          <ImgContainer
            width={"w-11/12 md:w-4/12"}
            url={"#"}
            img={projects[8].image}
            imgMaxHeight={imgMaxHeight}
            alt={projects[8].title}
            title={projects[8].title}
            titleMY={titleMY}
            tagline={projects[8].tagline}
          />

          <ImgContainer
            width={"w-11/12 md:w-7/12"}
            url={"#"}
            img={projects[9].image}
            imgMaxHeight={imgMaxHeight}
            alt={projects[9].title}
            title={projects[9].title}
            titleMY={titleMY}
            tagline={projects[9].tagline}
          />

          <ImgContainer
            width={"w-11/12 md:w-4/12"}
            url={"#"}
            img={projects[10].image}
            imgMaxHeight={imgMaxHeight}
            alt={projects[10].title}
            title={projects[10].title}
            titleMY={titleMY}
            tagline={projects[10].tagline}
          />

          <ImgContainer
            width={"w-11/12 md:w-4/12"}
            url={"#"}
            img={projects[11].image}
            imgMaxHeight={imgMaxHeight}
            alt={projects[11].title}
            title={projects[11].title}
            titleMY={titleMY}
            tagline={projects[11].tagline}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
