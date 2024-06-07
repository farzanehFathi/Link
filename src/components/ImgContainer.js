import { Link } from "react-router-dom";

const ImgContainer = ({ url, img, alt, title, description }) => {
  return (
    <Link to={url}>
      <div className="relative w-fit">
        <div className="bg-gray-800 z-50 absolute right-0 left-0 top-0 bottom-0 opacity-0 hover:opacity-40 transition-opacity ease-in-out delay-150"></div>
        <img className="object-fill" src={img} alt={alt} />
      </div>
      <h3 className="text-3xl my-2">{title}</h3>
      <p className="text-lg">{description}</p>
    </Link>
  );
};

export default ImgContainer;
