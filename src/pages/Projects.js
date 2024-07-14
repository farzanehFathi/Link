import ImgContainer from "../components/ImgContainer";

const Projects = ({ projects, titleMY, imageWidths, imgMaxHeights }) => {
  return (
    <div className="flex flex-wrap text-2xl lg:text-3xl">
      <div className="w-full flex flex-wrap justify-start gap-16 align-top pb-0 md:pb-20">
        {projects.map((project, index) => (
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
        ))}
      </div>
    </div>
  );
};

export default Projects;
