import React from 'react'
import Artist from '../../assets/artist.png'

const About = () => {
  return (
    <>
        <div className="h-screen md:pt-10 pt-20">
            <div className="flex justify-center items-center flex-col">
                <h1 className="text-4xl md:text-5xl bg-gradient-to-r from-pink-500 to-pink-400 bg-clip-text text-transparent px-5 py-4 rounded-3xl shadow-xl">
                About
                </h1>
                <p className="text-sm text-gray-400 pt-5">Who am I?</p>
            </div>
            <div className="md:mt-[220px] mt-20 text-center">
                <img 
                    src={Artist} 
                    alt="" 
                    className="w-[60%] mx-auto rounded-xl md:h-[500px] h-[250px]  object-cover shadow-lg hover:scale-105 duration-300 cursor-pointer"
                />
                <p className="text-sm text-gray-400 mt-10 p-10">
                    I am an artist from Milan, Italy. <br />
                    I create art in all forms and shapes. <br />
                    I am currently learning new fields and practicing my art. <br />
                    I am also a student at the University of Milan, studying art and design. <br />
                    I am a very creative person and I love to create new things. <br />
                </p>
            </div>
        </div>
    </>
  )
}

export default About