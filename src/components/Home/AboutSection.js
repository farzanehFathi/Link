import SectionsPattern from "./SectionsPattern";

const AboutSection = () => {
  return (
    <div className="bg-bg1">
      <SectionsPattern
        content={
          <p className="text-6xl w-8/12">
            LINK Arkitektur is a leading Scandinavian architectural business in
            Denmark, Norway and Sweden.
          </p>
        }
        title={"About LINK "}
        url={"/about"}
      />
    </div>
  );
};

export default AboutSection;
