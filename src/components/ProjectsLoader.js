const dataUrl = "http://localhost:4000/projects";

// loader function

export const projectsLoader = async () => {
  const res = await fetch(dataUrl);

  return res.json();
};
