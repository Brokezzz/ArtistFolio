import React, { useState } from 'react';
import Art1 from '../../assets/art1.jpg';
import Art2 from '../../assets/art2.jpg';
import Art3 from '../../assets/art3.png';
const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const getImageDescription = (image) => {
    switch (image) {
      case Art1:
        return "Image description for Art1";
      case Art2:
        return "Image description for Art2";
      case Art3:
        return "Image description for Art3";
      default:
        return "";
    }
  };

  return (
    <>
        <div className="h-[max] md:pt-10 pt-[100px]">
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-4xl md:text-5xl bg-gradient-to-r from-pink-500 to-pink-400 bg-clip-text text-transparent px-5 py-4 rounded-3xl shadow-xl">
              Portfolio
            </h1>
            <p className="text-sm text-gray-400 pt-5">Here are my works, made entirely by me</p>
          </div>
          <div className="border-[1px] border-pink-200 rounded-xl w-[90%] items-center text-center mx-auto mt-20 h-[max] p-2">
            <div className="border-[1px]  h-[150px] flex justify-between items-center gap-2">
              <div className="mx-auto border-2 h-[100%] w-[50%] flex items-center justify-center">
                <img 
                  src={Art1}
                  alt=""
                  className="object-cover w-[100%] h-[100%] shadow-lg hover:scale-105 duration-300 cursor-pointer"
                  onClick={() => handleImageClick(Art1)}
                />
              </div>
              <div className="mx-auto border-2 h-[100%] w-[50%] flex items-center justify-center">
                <img 
                  src={Art2}
                  alt=""
                  className="object-cover w-[100%] h-[100%] shadow-lg hover:scale-105 duration-300 cursor-pointer"
                  onClick={() => handleImageClick(Art2)}
                />
              </div>
            </div>
            <div className="border-[1px]  h-[150px] flex justify-between items-center gap-2 mt-2">
            <div className="mx-auto border-2 h-[100%] w-[80%] flex items-center justify-center">
                <img 
                  src={Art3}
                  alt=""
                  className="object-cover w-[100%] h-[100%] shadow-lg hover:scale-105 duration-300 cursor-pointer"
                  onClick={() => handleImageClick(Art3)}
                />
              </div>
              <div className="mx-auto border-2 h-[100%] w-[20%] flex items-center justify-center">
                <img 
                  src={Art2}
                  alt=""
                  className="object-cover w-[100%] h-[100%] shadow-lg hover:scale-105 duration-300 cursor-pointer"
                  onClick={() => handleImageClick(Art2)}
                />
              </div>
            </div>
            <div className="border-[1px] h-[150px] flex justify-between items-center gap-2 mt-2">
            <div className="mx-auto border-2 h-[100%] w-[33%] flex items-center justify-center">
                <img 
                  src={Art3}
                  alt=""
                  className="object-cover w-[100%] h-[100%] shadow-lg hover:scale-105 duration-300 cursor-pointer"
                  onClick={() => handleImageClick(Art3)}
                />
              </div>
              <div className="mx-auto border-2 h-[100%] w-[33%] flex items-center justify-center">
                <img 
                  src={Art2}
                  alt=""
                  className="object-cover w-[100%] h-[100%] shadow-lg hover:scale-105 duration-300 cursor-pointer"
                  onClick={() => handleImageClick(Art2)}
                />
              </div>
              <div className="mx-auto border-2 h-[100%] w-[33%] flex items-center justify-center">
                <img 
                  src={Art3}
                  alt=""
                  className="object-cover w-[100%] h-[100%] shadow-lg hover:scale-105 duration-300 cursor-pointer"
                  onClick={() => handleImageClick(Art3)}
                />
              </div>
            </div>
            <div className="border-[1px]  h-[150px] flex justify-between items-center gap-2 mt-2">
            <div className="mx-auto border-2 h-[100%] w-[20%] flex items-center justify-center">
                <img 
                  src={Art3}
                  alt=""
                  className="object-cover w-[100%] h-[100%] shadow-lg hover:scale-105 duration-300 cursor-pointer"
                  onClick={() => handleImageClick(Art3)}
                />
              </div>
              <div className="mx-auto border-2 h-[100%] w-[80%] flex items-center justify-center">
                <img 
                  src={Art2}
                  alt=""
                  className="object-cover w-[100%] h-[100%] shadow-lg hover:scale-105 duration-300 cursor-pointer"
                  onClick={() => handleImageClick(Art2)}
                />
              </div>
            </div>
            <div className="border-[1px]  h-[150px] flex justify-between items-center gap-2 mt-2">
            <div className="mx-auto border-2 h-[100%] w-[50%] flex items-center justify-center">
                <img 
                  src={Art1}
                  alt=""
                  className="object-cover w-[100%] h-[100%] shadow-lg hover:scale-105 duration-300 cursor-pointer"
                  onClick={() => handleImageClick(Art1)}
                />
              </div>
              <div className="mx-auto border-2 h-[100%] w-[25%] flex items-center justify-center">
                <img 
                  src={Art2}
                  alt=""
                  className="object-cover w-[100%] h-[100%] shadow-lg hover:scale-105 duration-300 cursor-pointer"
                  onClick={() => handleImageClick(Art2)}
                />
              </div>
              <div className="mx-auto border-2 h-[100%] w-[25%] flex items-center justify-center">
                <img 
                  src={Art3}
                  alt=""
                  className="object-cover w-[100%] h-[100%] shadow-lg hover:scale-105 duration-300 cursor-pointer"
                  onClick={() => handleImageClick(Art3)}
                />
              </div>
            </div>
          </div>
        </div>   
        {selectedImage && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-75 flex justify-center items-center">
          <div className="max-w-[50%] max-h-[50%]">
            <img src={selectedImage} alt="" className="object-contain max-w-full max-h-full" />
            <p className="text-white text-center mt-4">{getImageDescription(selectedImage)}</p>
            <button
              className="absolute top-4 right-4 text-white text-xl bg-transparent border-none"
              onClick={() => setSelectedImage(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Portfolio;
