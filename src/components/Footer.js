import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex my-100px w-11/12 mx-auto text-xl">
      <div className="w-4/12">
        If you have any questions, please let us know!
        <div className="flex">
          <Link className="group mr-6">
            {" "}
            <span className="span-x-translate pr-2">&#8594;</span> Norway
          </Link>
          <Link className="group mr-6">
            <span className="span-x-translate pr-2">&#8594;</span>
            Sweden
          </Link>
          <Link className="group">
            <span className="span-x-translate pr-2">&#8594;</span> Denmark
          </Link>
        </div>
      </div>
      <div>
        Følg
        <div>
          <Link className="group mr-6">
            {" "}
            <span className="span-x-translate pr-2">&#8594;</span>Facebook
          </Link>
          <Link className="group mr-6">
            {" "}
            <span className="span-x-translate pr-2">&#8594;</span>Instagram
          </Link>
          <Link className="group">
            {" "}
            <span className="font-Inter span-x-translate pr-2">&#8594;</span>
            LinkedIn
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
