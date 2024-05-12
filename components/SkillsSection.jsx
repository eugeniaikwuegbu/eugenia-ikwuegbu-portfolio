import Image from "next/image"
import React from 'react'
import NodeJsLogo from "../public/assets/skills/nodejs-logo.png"

const SkillsSection = () => {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={NodeJsLogo}
                            width="64"
                            height="64"
                            alt="/"
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>NodeJS</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={NodeJsLogo}
                            width="64"
                            height="64"
                            alt="/"
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>NodeJS</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={NodeJsLogo}
                            width="64"
                            height="64"
                            alt="/"
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>NodeJS</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={NodeJsLogo}
                            width="64"
                            height="64"
                            alt="/"
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>NodeJS</h3>
                        </div>
                    </div>
                </div>

            </div>
  )
}

export default SkillsSection