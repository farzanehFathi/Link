import { useState } from "react";
import { Link, Form, useNavigate } from "react-router-dom";

import MultiChoiceData from "../Admin/MultiChoiceData";
import MultipleSelections from "./MultipleSelections";

const inputWidth = "w-[300px]";
const multiChoiceWidth = "w-[250px]";
const multiChoiceInputWidth = "w-[400px]";

const AddProjectDetails = () => {
  const navigate = useNavigate();
  const [projectTitle, setProjectTitle] = useState("");
  const [client, setClient] = useState("");
  const [city, setCity] = useState("");
  const [photoBy, setPhotoBy] = useState("");
  const [services, setServices] = useState([]);
  const [sectors, setSectors] = useState([]);
  const [country, setCountry] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const projectDetails = {
      projectTitle,
      client,
      city,
      photoBy,
      services,
      sectors,
      country,
      status,
    };

    fetch("/updateProjectDetails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(projectDetails),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // Optionally, navigate to the next page or perform other actions upon successful submission
        navigate("/adminpanel/addproject/addprojectdescription");
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle errors here
      });
  };

  return (
    <div className="text-lg">
      <Form onSubmit={handleSubmit}>
        <div className="flex gap-12">
          <input
            placeholder="Project Title"
            value={projectTitle}
            onChange={(e) => setProjectTitle(e.target.value)}
            className={`block bg-branding2 border-b border-gray-500 focus:outline-none ${inputWidth}`}
            type="text"
          />
          <div className={`relative ${multiChoiceWidth}`}>
            <MultipleSelections
              title="Services"
              isOpen={false}
              options={[
                "Architecture",
                "Interior Architecture",
                "Landscape",
                "Sustainability",
                "Transformation",
              ]}
              onChange={setServices}
            />
          </div>
          <input
            value={services.join(", ")}
            readOnly
            placeholder=""
            className={`block bg-branding2 border-b border-gray-500 focus:outline-none ${multiChoiceInputWidth}`}
            type="text"
          />
        </div>
        <div className="flex gap-12 mt-4">
          <input
            placeholder="Client"
            value={client}
            onChange={(e) => setClient(e.target.value)}
            className={`block bg-branding2 border-b border-gray-500 focus:outline-none ${inputWidth}`}
            type="text"
          />
          <div className={`relative ${multiChoiceWidth}`}>
            <MultipleSelections
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
              onChange={setSectors}
            />
          </div>
          <input
            value={sectors.join(", ")}
            readOnly
            placeholder=""
            className={`block bg-branding2 border-b border-gray-500 focus:outline-none ${multiChoiceInputWidth}`}
            type="text"
          />
        </div>

        <div className="flex gap-12 mt-4">
          {" "}
          <input
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className={`block bg-branding2 border-b border-gray-500 focus:outline-none ${inputWidth}`}
            type="text"
          />
          <div className={`relative ${multiChoiceWidth}`}>
            {" "}
            <MultiChoiceData
              title="Country"
              isOpen={false}
              options={["Denmark", "Norway", "Sweden"]}
              onChange={setCountry}
            />
          </div>
          <input
            value={country}
            readOnly
            placeholder=""
            className={`block bg-branding2 border-b border-gray-500 focus:outline-none ${multiChoiceInputWidth}`}
            type="text"
          />
        </div>

        <div className="flex gap-12 mt-4">
          {" "}
          <input
            placeholder="Photo by"
            value={photoBy}
            onChange={(e) => setPhotoBy(e.target.value)}
            className={`block bg-branding2 border-b border-gray-500 focus:outline-none ${inputWidth}`}
            type="text"
          />
          <div className={`relative ${multiChoiceWidth}`}>
            {" "}
            <MultiChoiceData
              title="Status"
              isOpen={false}
              options={["Ongoing", "Completed"]}
              onChange={setStatus}
            />{" "}
          </div>
          <input
            value={status}
            readOnly
            placeholder=""
            className={`block bg-branding2 border-b border-gray-500 focus:outline-none ${multiChoiceInputWidth}`}
            type="text"
          />
        </div>
      </Form>

      <div className="flex justify-end">
        <Link
          to="/adminpanel/addproject/addprojectcontent"
          className="text-2xl mt-20 mb-4 py-1 px-12 bg-branding3 hover-effect"
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default AddProjectDetails;
