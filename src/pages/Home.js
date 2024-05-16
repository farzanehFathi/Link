import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <div className="bg-bg1">
        <div className="py-100px w-90p max-w-1800px mx-auto flex justify-between items-top">
          <p className="text-6xl w-8/12">
            Fari is a multifaceted individual enthusiastic about building
            technologies, web, and content.
          </p>
          <div className="text-3xl rotate-90">
            <h2>
              About Fari
              <span> &#8594;</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="w-90p max-w-1800px mx-auto flex justify-between items-top">
        <div className="text-5xl ">
          <h2 className="my-12">Architecture</h2>
          <h2 className="mb-6">
            <span>&#8594; </span>Energy Modellings
          </h2>
          <h2 className="mb-6">
            <span>&#8594; </span>Revit Architecture Works
          </h2>
          <h2 className="mb-6">
            <span>&#8594; </span>Revit Structure Works
          </h2>
          <h2 className="mb-6">
            <span>&#8594; </span>Research Studies
          </h2>
        </div>
        <div className="text-3xl rotate-90">
          <h2>
            Architecture
            <span> &#8594;</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
