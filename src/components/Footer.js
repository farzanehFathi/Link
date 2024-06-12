import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex my-100px w-11/12 mx-auto lg:text-xl">
      <div className="6/12 lg:w-4/12  ">
        If you have any questions, please let us know!
        <div className="mt-2 flex-col">
          <div>
            {" "}
            <Link className="group mr-6 hover-effect">
              {" "}
              <span className="span-x-translate pr-2">&#8594;</span> Norway
            </Link>
          </div>
          <div>
            {" "}
            <Link className="group mr-6 hover-effect">
              <span className="span-x-translate pr-2">&#8594;</span>
              Sweden
            </Link>
          </div>
          <div>
            <Link className="group  hover-effect">
              <span className="span-x-translate pr-2">&#8594;</span> Denmark
            </Link>
          </div>
        </div>
      </div>
      <div className="w-3/12 lg:w-4/12">
        <div> Følg</div>

        <div className="mt-2 flex-col">
          <div>
            <Link className="group mr-6 hover-effect">
              {" "}
              <span className="span-x-translate pr-2">&#8594;</span>Facebook
            </Link>
          </div>
          <div>
            {" "}
            <Link className="group mr-6 hover-effect">
              {" "}
              <span className="span-x-translate pr-2">&#8594;</span>Instagram
            </Link>
          </div>
          <div>
            {" "}
            <Link className="group hover-effect">
              {" "}
              <span className="span-x-translate pr-2">&#8594;</span>
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div>
          Information
          <div className="mt-2 flex-col">
            <div>
              {" "}
              <Link className="group hover-effect">
                {" "}
                <span className="span-x-translate pr-2">&#8594;</span>
                Ethics and integrity
              </Link>
            </div>
            <div>
              {" "}
              <Link className="group hover-effect">
                {" "}
                <span className="span-x-translate pr-2">&#8594;</span>
                Privacy policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
