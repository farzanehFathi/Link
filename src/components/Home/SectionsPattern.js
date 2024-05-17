import { NavLink } from "react-router-dom";

const SectionsPattern = ({ content, title, url }) => {
  return (
    <div className="w-90p max-w-1800px mx-auto ">
      <div className="py-100px flex justify-between items-top ">
        {content}
        <div className="text-3xl [writing-mode:vertical-lr]">
          <NavLink to={url}>
            <h2 className="hover:opacity-50 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
              {title}
              <span className=""> &#8594;</span>
            </h2>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SectionsPattern;
