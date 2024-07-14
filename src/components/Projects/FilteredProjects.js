import { useParams } from "react-router-dom";
import ImgContainer from "../ImgContainer";

const FilteredProjects = ({
  projects,
  serviceFilter,
  sectorFilter,
  searchQuery,
  imageWidths,
  imgMaxHeights,
  titleMY,
}) => {
  const { filter } = useParams();

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
    <div className="flex flex-wrap text-2xl lg:text-3xl">
      <div className="w-full flex flex-wrap justify-start gap-16 align-top pb-0 md:pb-20">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <ImgContainer
              width={imageWidths[index]}
              url={"#"}
              img={project.image}
              imgMaxHeight={imgMaxHeights[index]}
              alt={project.title}
              title={project.title}
              titleMY={titleMY}
              tagline={project.tagline}
            />
          ))
        ) : (
          <div>No projects found. Please try adjusting your filters.</div>
        )}
      </div>
    </div>
  );
};

export default FilteredProjects;
