import { Link } from "react-router-dom";

const AddProjectImages = () => {
  return (
    <div>
      <div>
        this is project images
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
            Submit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddProjectImages;
