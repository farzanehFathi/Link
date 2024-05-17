import Sections from "./Sections";

const About = () => {
  return (
    <div className="bg-bg1">
      <Sections
        content={
          <p className="text-6xl w-8/12">
            Fari is a multifaceted individual enthusiastic about building
            technologies, web, and content.
          </p>
        }
        title={"About Fari"}
      />
    </div>
  );
};

export default About;
