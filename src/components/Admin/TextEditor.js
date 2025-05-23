import { useState } from "react";

const TextEditor = () => {
  const [sections, setSections] = useState([{ heading: "", paragraph: "" }]);

  const addSection = () => {
    setSections([...sections, { heading: "", paragraph: "" }]);
  };

  const handleInputChange = (index, key, value) => {
    const updatedSections = [...sections];
    updatedSections[index][key] = value;
    setSections(updatedSections);
  };

  return (
    <div className=" text-gray-700">
      <div className="flex justify-between text-black my-6">
        {" "}
        <h3 className="text-4xl font-bold ">Project content</h3>{" "}
        <button
          className="py-1 px-3 bg-branding1 hover-effect "
          onClick={addSection}
        >
          Add A New Heading
        </button>
      </div>

      {sections.map((section, index) => (
        <div key={index} className="section">
          <input
            className="bg-transparent block w-full focus:outline-none my-1 font-bold"
            type="text"
            placeholder="Headline"
            value={section.heading}
            onChange={(e) =>
              handleInputChange(index, "heading", e.target.value)
            }
          />
          <textarea
            className="bg-transparent block w-full focus:outline-none mb-2"
            placeholder="Content"
            value={section.paragraph}
            onChange={(e) =>
              handleInputChange(index, "paragraph", e.target.value)
            }
          />
        </div>
      ))}
    </div>
  );
};

export default TextEditor;
