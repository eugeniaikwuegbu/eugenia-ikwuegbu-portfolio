import Image from "next/image";
import SkillsSection from "../interfaces/SkillsSection";

export interface SectionInfo {
  sections: { title: string; path: any }[];
}

const SkillsSection = ({ sections }: SkillsSection) => {
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
  // return (
  //   <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
  //     <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
  //       <div className="grid grid-cols-2 gap-4 justify-center items-center">
  //         <div className="m-auto">
  //           <Image src={ReactLogo} width="64" height="64" alt="/" />
  //         </div>
  //         <div className="flex flex-col items-center justify-center">
  //           <h3>React</h3>
  //         </div>
  //       </div>
  //     </div>

  //     <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
  //       <div className="grid grid-cols-2 gap-4 justify-center items-center">
  //         <div className="m-auto">
  //           <Image src={NodeJsLogo} width="64" height="64" alt="/" />
  //         </div>
  //         <div className="flex flex-col items-center justify-center">
  //           <h3>NodeJS</h3>
  //         </div>
  //       </div>
  //     </div>

  //     <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
  //       <div className="grid grid-cols-2 gap-4 justify-center items-center">
  //         <div className="m-auto">
  //           <Image src={Tailwind} width="64" height="64" alt="/" />
  //         </div>
  //         <div className="flex flex-col items-center justify-center">
  //           <h3>Tailwind CSS</h3>
  //         </div>
  //       </div>
  //     </div>

  //     <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
  //       <div className="grid grid-cols-2 gap-4 justify-center items-center">
  //         <div className="m-auto">
  //           <Image src={NextJS} width="64" height="64" alt="/" />
  //         </div>
  //         <div className="flex flex-col items-center justify-center">
  //           <h3>NextJS</h3>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default SkillsSection;
