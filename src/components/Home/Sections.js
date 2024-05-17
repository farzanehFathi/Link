const Sections = ({ content, title }) => {
  return (
    <div className="w-90p max-w-1800px mx-auto ">
      <div className="py-100px flex justify-between items-top ">
        {content}
        <div className="text-3xl [writing-mode:vertical-lr]">
          <h2>
            {title}
            <span> &#8594;</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Sections;
