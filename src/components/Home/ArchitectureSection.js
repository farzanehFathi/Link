import SectionsPattern from "./SectionsPattern";

const ArchitectureSection = () => {
  return (
    <div>
      <SectionsPattern
        content={
          <div className="text-5xl w-8/12 ">
            <h2 className="mb-12">Architecture</h2>
            <h2 className="mb-6">
              <span>&#8594; </span>Energy Modellings
            </h2>
            <h2 className="mb-6">
              <span>&#8594; </span>Revit Architecture Works
            </h2>
            <h2 className="mb-6">
              <span>&#8594; </span>Revit Structure Works
            </h2>
            <h2 className="mb-6">
              <span>&#8594; </span>Research Studies
            </h2>
          </div>
        }
        title={"Architecture"}
      />
    </div>
  );
};

export default ArchitectureSection;
