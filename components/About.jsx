import Image from 'next/image';
import AboutImage from '../public/assets/about.jpeg';

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] md:grid grid-cols-3 gap-8 m-auto">
        <div className="col-span-2">
          <p className="text-xl tracking-widest uppercase text-[#5651e5] font-bold">
            About
          </p>
          <h2 className="py-4">Who We Are</h2>
          {/* <p className="py-2 text-gray-600">I am not your normal developer</p> */}
          {/* <p className="py-2 text-gray-600">Enter brief profile summary</p> */}
          {/* <p className="py-2 text-gray-600">Enter another brief profile summary</p> */}
          {/* <p className="py-2 text-gray-600 underline cursor-pointer">check out some of my projects</p> */}
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p4 hover:scale-105 ease-in duration-300">
        <Image
              src={AboutImage}
              alt='/'
              className='cursor-pointer rounded-xl'
            />
        </div>
      </div>
    </div>
  );
};

export default About;
