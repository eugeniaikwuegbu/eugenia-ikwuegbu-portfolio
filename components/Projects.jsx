import happiVibes from "../public/assets/projects/happiVibes.png";
import places from "../public/assets/projects/ibloov-places.png";
import ibloov from "../public/assets/projects/ibloov.png";
import vendaw from "../public/assets/projects/vendaw.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full mt-28">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <div className="text-center mb-20">
          <p className="text-xl tracking-widest uppercase text-[#5651e5] font-bold py-4">
            What I&apos;ve Built
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Vendaw"
            backgroundImg={vendaw}
            projectUrl="https://app.vendaw.com/"
          />
          <ProjectItem
            title="Ibloov"
            backgroundImg={ibloov}
            projectUrl="https://app.ibloov.com/explore"
          />
          <ProjectItem
            title="Ibloov Places"
            backgroundImg={places}
            projectUrl="https://app.ibloov.com/places/explore"
          />
          <ProjectItem
            title="Happi Vibe"
            backgroundImg={happiVibes}
            projectUrl="https://app.happivibe.com/login"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
