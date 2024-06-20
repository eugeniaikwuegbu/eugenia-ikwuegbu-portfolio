import AwsImg from "../public/assets/skills/aws.png";
import CssImage from "../public/assets/skills/css.png";
import DigitalOceanImage from "../public/assets/skills/digital-ocean.png";
import DockerImage from "../public/assets/skills/docker.png";
import ExpressJSImage from "../public/assets/skills/expressJs.png";
import GithubImage from "../public/assets/skills/github.png";
import HtmlImage from "../public/assets/skills/html.png";
import JavascriptImage from "../public/assets/skills/javascript.png";
import MongoDbImage from "../public/assets/skills/mongo.png";
import NestJsImage from "../public/assets/skills/nestjs.png";
import NextjsImage from "../public/assets/skills/nextjs.png";
import NodeJsImage from "../public/assets/skills/nodejs.png";
import PostgresImage from "../public/assets/skills/postgres.png";
import ReactImage from "../public/assets/skills/react.png";
import TailWindCssImage from "../public/assets/skills/tailwind.png";
import TypescriptImage from "../public/assets/skills/typescript.png";
import SkillsSection from "./SkillsSection";

const Skills = () => {
  const sectionDetails = [
    { title: "Node.JS", image: NodeJsImage },
    { title: "ExpressJS", image: ExpressJSImage },
    { title: "JavaScript", image: JavascriptImage },
    { title: "TypeScript", image: TypescriptImage },
    { title: "NestJS", image: NestJsImage },
    { title: "MongoDb", image: MongoDbImage },
    { title: "Postgres", image: PostgresImage },
    { title: "Digital Ocean", image: DigitalOceanImage },
    { title: "AWS", image: AwsImg },
    { title: "Docker", image: DockerImage },
    { title: "HTML", image: HtmlImage },
    { title: "CSS", image: CssImage },
    { title: "React", image: ReactImage },
    { title: "Next", image: NextjsImage },
    { title: "Tailwind CSS", image: TailWindCssImage },
    { title: "GitHub", image: GithubImage },
  ];

  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <div className="mb-20 text-center">
          <p className="text-xl tracking-widest uppercase text-[#5651e5] font-bold">
            Skills
          </p>
          <h2 className="py-4 ">What I do</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillsSection sections={sectionDetails} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
