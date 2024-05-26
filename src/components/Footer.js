import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex">
      <div>
        If you have any questions, please let us know!
        <div className="flex">
          <Link>Norway</Link>
          <Link>Sweden</Link>
          <Link>Denmark</Link>
        </div>
      </div>
      <div>
        Følg
        <div>
          <Link>Facebook</Link>
          <Link>Instagram</Link>
          <Link>LinkedIn</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
