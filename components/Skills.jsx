import SkillsSection from "./SkillsSection"


const Skills = () => {
  return (
    <div id="skills" className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5] font-bold'>Skills</p>
            <h2 className='py-4'>What we do</h2>
            <SkillsSection/>
            
        </div>
    </div>
  )
}

export default Skills