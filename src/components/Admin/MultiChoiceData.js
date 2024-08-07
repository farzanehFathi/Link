import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const MultiChoiceData = ({ title, options, isOpen, onChange }) => {
  const formRef = useRef();
  const [open, setOpen] = useState(isOpen);
  const [selectedOption, setSelectedOption] = useState("");

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

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onChange(option);
    setOpen(false);
  };

  return (
    <div ref={formRef}>
      <div
        type="button"
        onClick={() => {
          setOpen(!open);
        }}
        className="flex justify-between align-middle px-4  hover:cursor-pointer"
      >
        <span className="w-full ">{title}</span>
        <FontAwesomeIcon
          icon={faChevronDown}
          className="font-Inter  pt-2 text-sm "
        />
      </div>
      <AnimatePresence initial={true}>
        {open && (
          <motion.div
            className="pb-2 px-4 text-lg bg-branding3 text-white absolute top-0 left-0 right-0 z-50"
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              type="button"
              onClick={() => {
                setOpen(!open);
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
              <div
                className="hover-effect cursor-pointer"
                key={option}
                onClick={() => handleOptionClick(option)}
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

export default MultiChoiceData;
