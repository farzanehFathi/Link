import SectionsPattern from "./SectionsPattern";
import ImgContainer from "../ImgContainer";

import Fllesskabets from "../../imgs/Home/F+ªllesskabets.jpg";
import Norrtälje from "../../imgs/Home/Norrtälje.jpg";
import Skolekvartalet from "../../imgs/Home/Skolekvartalet.jpg";
import Stovnertårnet from "../../imgs/Home/Stovnertårnet.jpg";

const ProjectsSection = () => {
  return (
    <div>
      <SectionsPattern
        content={
          <div className="flex flex-wrap w-11/12">
            <div className="w-full flex ">
              <div className="w-8/12 px-4 pb-10">
                <ImgContainer
                  url={"#"}
                  img={Skolekvartalet}
                  alt={"Ski school quarter"}
                  title={"Ski school quarter"}
                  description={"Urban development in the heart of Ski"}
                />
              </div>

              <div className="w-4/12 px-4 pb-10">
                <ImgContainer
                  url={"#"}
                  img={Norrtälje}
                  alt={"Norrtälje Mortuary"}
                  title={"Norrtälje Mortuary"}
                  description={"Tasteful design for a dignified farewell"}
                />
              </div>
            </div>
            <div className="w-full flex justify-between align-top">
              <div className="w-4/12 px-4 py-10">
                <ImgContainer
                  url={"#"}
                  img={Fllesskabets}
                  alt={"Fællesskabets Hus"}
                  title={"Fællesskabets Hus"}
                  description={"A space for care and domesticity"}
                />
              </div>

              <div className="w-7/12 px-4 py-10">
                <ImgContainer
                  url={"#"}
                  img={Stovnertårnet}
                  alt={"Stovnertårnet - Stovner tower"}
                  title={"Stovnertårnet - Stovner tower"}
                  description={" Norway's most inclusive landscape project"}
                />
              </div>
            </div>
          </div>
        }
        title={"Projects"}
        url={"projects"}
      />
    </div>
  );
};

export default ProjectsSection;
