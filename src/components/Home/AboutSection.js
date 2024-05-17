import SectionsPattern from "./SectionsPattern";

const AboutSection = () => {
  return (
    <div className="bg-bg1">
      <SectionsPattern
        content={
          <p className="text-6xl w-8/12">
            Fari is a multifaceted individual enthusiastic about building
            technologies, web, and content.
          </p>
        }
        title={"About Fari"}
        url={"/about"}
      />
    </div>
  );
};

export default AboutSection;
