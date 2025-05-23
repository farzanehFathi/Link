import { Form, Link } from "react-router-dom";
import TextEditor from "./TextEditor";

const AddProjectContent = () => {
  return (
    <div className="relative">
      <Form>
        <input
          type="text"
          className="w-full bg-transparent border-b border-gray-500 focus:outline-none mb-3"
          placeholder="Project tagline"
          name="tagline"
        />
        <textarea
          className="w-full bg-transparent border-b border-gray-500 focus:outline-none"
          placeholder="Project description"
          name="description"
          id=""
        ></textarea>

        <TextEditor />
      </Form>
      <div className="flex gap-6 justify-end ">
        <Link
          to="/adminpanel/addproject/addprojectdetails"
          className="text-2xl mt-20 mb-4 py-1 px-12 bg-branding3 hover-effect"
        >
          Back
        </Link>
        <Link
          to="/adminpanel/addproject/addprojectimages"
          className="text-2xl mt-20 mb-4 py-1 px-12 bg-branding3 hover-effect"
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default AddProjectContent;
