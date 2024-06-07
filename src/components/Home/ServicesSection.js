import { Link } from "react-router-dom";
import SectionsPattern from "./SectionsPattern";

const ServicesSection = () => {
  return (
    <div className="bg-branding2">
      <SectionsPattern
        content={
          <Link>
            <p className="text-6xl group">
              <span className="block group-hover:text-branding3 mb-10">
                We create space
              </span>
              <span className="block text-branding1">
                for dialogue and teamwork
              </span>
            </p>
          </Link>
        }
        title={"Services"}
        url={"services"}
      />
    </div>
  );
};

export default ServicesSection;
