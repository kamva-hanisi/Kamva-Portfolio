function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img src={project.image} />

      <h3>{project.title}</h3>

      <p>{project.tech.join(", ")}</p>

      <div className="buttons">
        <a href={project.demo} target="_blank">
          Live Demo
        </a>

        <a href={project.github} target="_blank">
          GitHub
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
