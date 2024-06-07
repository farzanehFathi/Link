import { Link } from "react-router-dom";
import SectionsPattern from "./SectionsPattern";

import contactImg from "../../imgs/Home/MIR 1.jpg";

const ContactSection = () => {
  return (
    <div className="bg-branding4 text-white">
      <SectionsPattern
        content={
          <div className="w-10/12 flex justify-between items-center">
            <div className="w-5/12">
              <img src={contactImg} alt="" />
            </div>
            <div className="w-6/12">
              <p className="text-5xl mb-24">
                Are you interested in collaborating with us on a new project?
              </p>
              <Link>
                <div className="flex gap-3 text-3xl hover:opacity-50 group">
                  <p className="block">
                    Whatever the case, don't hesitate to drop us a message
                  </p>
                  <p className="span-x-translate">&#8594;</p>
                </div>
              </Link>
            </div>
          </div>
        }
        title={"Contact"}
        url={"contact"}
      />
    </div>
  );
};

export default ContactSection;
