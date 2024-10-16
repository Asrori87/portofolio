import { projects } from "../constants";
import arrowRight from "../assets/arrow-right.svg";

const Projects = () => {
  return (
    <section className="px-24">
      <div className="flex gap-16 py-20">
        <h2 className="w-2/6 text-end uppercase font-bold text-sky-600 tracking-widest">
          Projects
        </h2>
        <div className="flex flex-1 flex-col justify-between gap-16">
          {projects.map((project) => (
            <div key={project.label}>
              <a
                href={project.link}
                target="_blank"
                className="text-[15px] font-bold mb-4 inline-flex gap-2 hover:gap-4 transition-all ease-in"
              >
                {project.label}
                <img src={arrowRight} alt="arrow right" />
              </a>
              <p className="text-[15px] mb-6 text-slate-700">
                {project.description}
              </p>
              <div className="flex gap-2">
                {project.tags.map((tag) => (
                  <p
                    key={tag}
                    className=" pt-1.5 pb-1 px-1.5 text-[10px] text-sky-600 border-sky-600 border font-bold rounded-sm tracking-wide"
                  >
                    {tag}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
