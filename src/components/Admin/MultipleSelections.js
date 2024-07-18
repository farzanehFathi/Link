import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const MultipleSelections = ({ title, options, isOpen, onChange }) => {
  const formRef = useRef();
  const [open, setOpen] = useState(isOpen);
  const [selectedOptions, setSelectedOptions] = useState([]);

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
    const newSelectedOptions = selectedOptions.includes(option)
      ? selectedOptions.filter((item) => item !== option)
      : [...selectedOptions, option];
    setSelectedOptions(newSelectedOptions);
    onChange(newSelectedOptions);
    setOpen(false); // Close the dropdown menu after selection
  };

  return (
    <div ref={formRef} className="relative">
      <div
        type="button"
        onClick={() => setOpen(!open)}
        className="flex justify-between align-middle px-4 hover:cursor-pointer"
      >
        <span className="w-full">{title}</span>
        <FontAwesomeIcon
          icon={open ? faChevronUp : faChevronDown}
          className="font-Inter pt-2 text-sm"
        />
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            className="pb-2 px-4 text-lg bg-branding3 text-white absolute top-8 left-0 right-0 z-50"
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {options.map((option) => (
              <div
                key={option}
                className={`hover-effect cursor-pointer p-2 ${
                  selectedOptions.includes(option) ? "font-bold" : ""
                }`}
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

export default MultipleSelections;
