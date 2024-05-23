import { Link } from "react-router-dom";
import SectionsPattern from "./SectionsPattern";

import augmented from "../../imgs/Home/The-augmented-architect.jpg";
import hospital from "../../imgs/Home/lpgc3uwqt5yrtaamvgxc.jpg";

const NewsSection = () => {
  return (
    <div>
      <SectionsPattern
        content={
          <div className="flex gap-x-24 w-9/12 text-lg font-bold">
            <div className="w-6/12">
              <Link>
                <img src={augmented} alt="" />
                <p>LINK Arkitektur launches The Augmented Architect</p>
                <p>28.02.2023</p>
              </Link>
            </div>
            <div className="w-6/12">
              <Link>
                <img src={hospital} alt="" />
                <p>LINK Arkitektur wins hospital project in southern Sweden</p>
                <p> 11.01.2022</p>
              </Link>
            </div>
          </div>
        }
        title={"News"}
        url={"news"}
      />
    </div>
  );
};

export default NewsSection;
