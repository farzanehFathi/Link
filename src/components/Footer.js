import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex my-100px w-11/12 mx-auto lg:text-xl">
      <div className="md:6/12 lg:w-4/12  ">
        If you have any questions, please let us know!
        <div className="mt-2">
          <Link className="group mr-6 md:block hover-effect">
            {" "}
            <span className="span-x-translate pr-2">&#8594;</span> Norway
          </Link>
          <Link className="group mr-6 md:block hover-effect">
            <span className="span-x-translate pr-2">&#8594;</span>
            Sweden
          </Link>
          <Link className="group md:block hover-effect">
            <span className="span-x-translate pr-2">&#8594;</span> Denmark
          </Link>
        </div>
      </div>
      <div className="w-4/12">
        Følg
        <div className="mt-2">
          <Link className="group mr-6 md:block hover-effect">
            {" "}
            <span className="span-x-translate pr-2">&#8594;</span>Facebook
          </Link>
          <Link className="group mr-6 md:block hover-effect">
            {" "}
            <span className="span-x-translate pr-2">&#8594;</span>Instagram
          </Link>
          <Link className="group md:block hover-effect">
            {" "}
            <span className="span-x-translate pr-2">&#8594;</span>
            LinkedIn
          </Link>
        </div>
      </div>
      <div>
        <div>
          Information
          <div className="mt-2">
            <Link className="group md:block hover-effect">
              {" "}
              <span className="span-x-translate pr-2">&#8594;</span>
              Ethics and integrity
            </Link>
            <Link className="group md:block hover-effect">
              {" "}
              <span className="span-x-translate pr-2">&#8594;</span>
              Privacy policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
