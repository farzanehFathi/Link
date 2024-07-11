import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const MultiChoiceData = ({ title, options, isOpen }) => {
  const [open, setOpen] = useState(isOpen);
  return (
    <div>
      <div
        type="button"
        onClick={() => {
          isOpen = setOpen(!open);
        }}
        className="flex justify-between align-middle px-4"
      >
        <span className="w-full ">{title}</span>
        <FontAwesomeIcon
          icon={faChevronDown}
          className="font-Inter  pt-2 text-sm "
        />
      </div>
      <div
        className={`pb-4 px-4 text-lg bg-branding3 text-white absolute top-0 left-0 right-0 z-50 transition-opacity ease-in-out duration-100 ${
          open ? "h-full" : "h-0"
        } `}
      >
        <div
          type="button"
          onClick={() => {
            isOpen = setOpen(!open);
          }}
          className="flex justify-between hover-effect pb-2"
        >
          <span className="text-lg">{title}</span>{" "}
          <FontAwesomeIcon
            icon={faChevronUp}
            className="font-Inter  pt-1 text-sm "
          />
        </div>

        {options.map((option) => (
          <div className="hover-effect" key={option}>
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiChoiceData;
