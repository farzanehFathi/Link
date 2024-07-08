import { Link, Form } from "react-router-dom";

import MultiChoiceData from "../Admin/MultiChoiceData";

const AddProjectDetails = () => {
  return (
    <div className="text-lg">
      <Form>
        <div className="flex gap-24">
          <input
            placeholder="Project Title"
            className="block w-[450px] bg-branding2 border-b border-gray-500 focus:outline-none"
            type="text"
          />
          <div className="relative w-[300px]">
            <MultiChoiceData
              title="Services"
              isOpen={false}
              options={[
                "Architecture",
                "Interior Architecture",
                "Landscape",
                "Sustainability",
                "Transformation",
              ]}
            />
          </div>
        </div>
        <div className="flex gap-24 mt-4">
          <input
            placeholder="Client"
            className="block w-[450px] mt-2 bg-branding2 border-b border-gray-500 focus:outline-none"
            type="text"
          />
          <div className="relative w-[300px]">
            <MultiChoiceData
              title="Sectors"
              isOpen={false}
              options={[
                "Commertial",
                "Culture",
                "Education",
                "Hospitals",
                "Industry",
                "Residential",
                "Urban Development",
              ]}
            />
          </div>
        </div>

        <div className="flex gap-24 mt-4">
          {" "}
          <input
            placeholder="City"
            className="block w-[450px] mt-2 bg-branding2 border-b border-gray-500 focus:outline-none"
            type="text"
          />
          <div className="relative w-[300px]">
            {" "}
            <MultiChoiceData
              title="Country"
              isOpen={false}
              options={["Denmark", "Norway", "Sweden"]}
            />
          </div>
        </div>

        <div className="flex gap-24 mt-4">
          {" "}
          <input
            placeholder="Photo by"
            className="block w-[450px] mt-2 bg-branding2 border-b border-gray-500 focus:outline-none"
            type="text"
          />
          <div className=" relative w-[300px] ">
            {" "}
            <MultiChoiceData
              title="Status"
              isOpen={false}
              options={["Ongoing", "Completed"]}
            />{" "}
          </div>
        </div>
      </Form>

      <div className="flex justify-end pr-[180px]">
        <Link
          to="/adminpanel/addproject/addprojectdescription"
          className="text-2xl mt-20 mb-4 py-1 px-12 bg-branding3 hover-effect"
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default AddProjectDetails;
