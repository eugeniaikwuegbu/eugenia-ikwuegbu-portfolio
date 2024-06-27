import Image from "next/image";
import ISkillsSection from "../interfaces/SkillsSection";

export interface SectionInfo {
  sections: { title: string; path: any }[];
}

const SkillsSection = ({ sections }: ISkillsSection) => {
  return sections.map((section, index) => {
    return (
      <div
        key={index + 1}
        className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
      >
        <div className="grid grid-cols-2 gap-4 justify-center items-center">
          <div className="m-auto">
            <Image src={section.image} width="64" height="64" alt="/" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3>{section.title}</h3>
          </div>
        </div>
      </div>
    );
  });
};

export default SkillsSection;
