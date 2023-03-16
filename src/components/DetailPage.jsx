import React from "react";
import { TiTimes, TiArrowForward } from "react-icons/ti";

function Modal({ show, book, onClose }) {
  if (!show) {
    return null;
  }
  let coverImages = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;
  return (
    <>
      <div className="min-h-screen fixed top-0 left-0  right-0  flex items-center justify-center bg-[#0000000c]" >
        <div className="bg-white flex flex-col gap-2 w-2/3 text-2xl relative p-10">
          <button className="text-5xl absolute top-4 right-4 outline-none border-none "
            onClick={onClose}>
            <TiTimes />
          </button>

          <div className="">

            <div className="py-8 flex border-b-4 border-sky-300 flex-col text-center sm:text-left sm:flex-row gap-5">

              <img src={coverImages} alt="coverImages" className="object-cover" />
              <div>
                <h1 className="text-3xl  xl:text-6xl md:text-4xl font-bold ">{book.volumeInfo.title}</h1>
                <div className="text-xl">
                  <h3 className="mt-3 text-md sm:text-xl ">By:<span className="text-sky-700">{book.volumeInfo.authors} </span> </h3>
                  <h4 className="text-sm sm:text-xl text-black">{book.volumeInfo.publisher} <span className="text-gray-400"> {book.volumeInfo.publishedDate}</span></h4>
                  <p className="text-sm sm:text-xl">Category: <span className="text-sky-700 ">{book.volumeInfo.categories}</span></p>
                  <a href={book.accessInfo.pdf}> 
                  <button className="outline-none border-none text-lg rounded-md bg-sky-300 text-white font-semibold py-1 px-5 hover:bg-sky-700 mt-2 ">
                    Download 
                  </button></a>
                </div>
              </div>

            </div>


            <div className="mt-3">
              <p className=" ">
                {book.volumeInfo.description}
              </p>
              <a href={book.volumeInfo.previewLink
              }
                className='cursor-pointer text-sky-700'>full preview <TiArrowForward className=" inline-block" /></a>
            </div>
          </div>
         
        </div>
      </div>
    </>
  );
}
export default Modal;
