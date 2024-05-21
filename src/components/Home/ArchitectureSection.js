import SectionsPattern from "./SectionsPattern";

const ArchitectureSection = () => {
  return (
    <div>
      <SectionsPattern
        content={
          <div className="text-5xl w-8/12 ">
            <h2 className="mb-12">All services</h2>
            <h2 className="mb-6">
              <span>&#8594; </span>Architecture
            </h2>
            <h2 className="mb-6">
              <span>&#8594; </span>Interior Architecture
            </h2>
            <h2 className="mb-6">
              <span>&#8594; </span>Landscape
            </h2>
            <h2 className="mb-6">
              <span>&#8594; </span>Transformation
            </h2>
            <h2 className="mb-6">
              <span>&#8594; </span>Digital practice
            </h2>
          </div>
        }
        title={"Services"}
      />
    </div>
  );
};

export default ArchitectureSection;
