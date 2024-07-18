import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const FilterForm = ({
  title,
  filterID,
  options,
  isOpen,
  setFilter,
  currentFilters,
}) => {
  const formRef = useRef();
  const navigate = useNavigate();

  const [open, setOpen] = useState(isOpen);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (formRef.current && !formRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleFilterClick = (option) => {
    const updatedFilters = { ...currentFilters, [filterID]: option };

    if (option === "All") {
      delete updatedFilters[filterID];
    }

    setFilter(option);

    const filterParams = new URLSearchParams(updatedFilters).toString();
    navigate(`?${filterParams}`, { replace: true });
  };

  return (
    <div ref={formRef}>
      <div
        type="button"
        onClick={() => {
          isOpen = setOpen(!open);
        }}
        className="group flex justify-between align-middle "
      >
        <span className="w-full group-hover:hover-effect group-hover:translate-x-4 transform transition-transform duration-300">
          {title}
        </span>
        <FontAwesomeIcon
          icon={faChevronDown}
          className="font-Inter  pt-2 text-sm group-hover:-translate-x-4 transform transition-transform duration-300"
        />
      </div>

      <AnimatePresence initial={true}>
        {open && (
          <motion.div
            className={`py-4  px-4 text-lg bg-branding2 absolute top-0 left-0 right-0 z-50`}
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              type="button"
              onClick={() => {
                isOpen = setOpen(!open);
              }}
              className="flex justify-between hover-effect pb-2"
            >
              <span className="text-2xl">{title}</span>{" "}
              <FontAwesomeIcon
                icon={faChevronUp}
                className="font-Inter  pt-1 text-sm "
              />
            </div>
            {options.map((option) => (
              <div
                className="hover-effect"
                key={option}
                onClick={() => {
                  setOpen(false);
                  handleFilterClick(option);
                }}
              >
                {option}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FilterForm;
