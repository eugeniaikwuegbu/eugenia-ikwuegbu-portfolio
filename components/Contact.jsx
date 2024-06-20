import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  return (
    <div id="contact" className="w-full">
      <div className="max-w-[800px] mx-auto my-10 px-2 py-16">
        <h2 className="text-center tracking-widest text-[#5651e5]">
          Get in Touch
        </h2>

        <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
          <div className="p-4">
            <form
              // action="https://getform.io/f/jawxlyqb"
              // method="POST"
              encType="multipart/form-data"
            >
              <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                <div className="flex flex-col">
                  <label className="text-sm py-2">Name</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="name"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm py-2">Phone Number</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="number"
                    name="phone"
                  />
                </div>
              </div>
              <div className="flex flex-col py-2">
                <label className="text-sm py-2">Email</label>
                <input
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                  type="email"
                  name="email"
                />
              </div>
              <div className="flex flex-col py-2">
                <label className="text-sm py-2">Subject</label>
                <input
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                  type="text"
                  name="subject"
                />
              </div>
              <div className="flex flex-col py-2">
                <label className="text-sm py-2">Message</label>
                <textarea
                  className="border-2 rounded-lg p-3 border-gray-300"
                  rows="10"
                  name="message"
                ></textarea>
              </div>
              <button className="w-full h-15 p-2 text-gray-100 mt-4 hover:border-b">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <div
        className="flex items-center justify-between max-w-[330px] m-auto py-4"
        style={{ ["margin-top"]: "-80px" }}
      >
        <a
          href="https://www.linkedin.com/in/eugenia-ikwuegbu-456166163/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
            <FaLinkedinIn />
          </div>
        </a>
        <a
          href="https://github.com/eugeniaikwuegbu"
          target="_blank"
          rel="noreferrer"
        >
          <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
            <FaGithub />
          </div>
        </a>
        <Link href="/#contact">
          <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
            <AiOutlineMail />
          </div>
        </Link>
      </div>
      <div className="flex justify-center py-12 mt-10">
        <Link href="/">
          <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
            <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
