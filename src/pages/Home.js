import autumn from "./autumn.jpg";

const Home = () => {
  return (
    <div className="">
      <div>
        <img src={autumn} alt="" className="object-cover h-dvh w-full" />
      </div>
      <div className="bg-bg1 p-100px flex justify-around items-top">
        <p className="text-5xl w-8/12">
          Fari is a multifaceted individual enthusiastic about building energy
          modelling, architecture and BIM, tech and web development,
          copywriting, and content creation .
        </p>
        <div className="text-3xl rotate-90">
          <h2>
            About Fari
            <span> &#8594;</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
