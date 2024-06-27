import Image from "next/image";
import Link from "next/link";
import MyImage from "../public/assets/me.jpeg";

const About = () => {
  return (
    <div
      id="about"
      className="w-full md:h-screen p-2 flex items-center py-16"
      style={{ ["margin-top"]: "-100px" }}
    >
      <div className="max-w-[1240px] md:grid grid-cols-3 gap-8 m-auto text-center">
        <div className="col-span-2">
          <p className="text-xl tracking-widest uppercase text-[#5651e5] font-bold py-4">
            Who I am
          </p>
          <p className="py-2">
            I specialize in building scalable full-stack applications, with
            proficiency in implementing Frontend UIs and integrating robust
            back-end technologies.{" "}
          </p>

          <p>
            My expertise includes designing and implementing Backend APIs and
            creating mobile-responsive front-end UIs that seamlessly connect
            with these APIs and other back-end systems, While I am fullstack
            developer, proficient in Frontend and Back-end Technologies
            including HTML, CSS, JavaScript, and React, NodeJS, NestJS, etc, my
            true strength lies in my versatility and eagerness to learn new
            technologies. I believe that being a great developer means choosing
            the best tool for each task.
          </p>
          {/* <p className="py-2 text-gray-600">Enter another brief profile summary</p> */}
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p4 hover:scale-105 ease-in duration-300">
          <Image src={MyImage} alt="/" className="cursor-pointer rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default About;
