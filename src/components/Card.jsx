import React, { useState } from "react";
import DetailPage from "./DetailPage";

function Card({ books }) {
  const [show, setShow] = useState(false);
  const [bookItem, setBookItem] = useState();

  return (
    <>
      {books.map((book) => {
        let coverImage = book.volumeInfo.imageLinks &&
          book.volumeInfo.imageLinks.thumbnail
        return (
          <>
            <div 
              key={book.id}
              onClick={() => {
                setShow(true);
                setBookItem(book);
              }}
            className="h-[200px]  w-[200px] bg-opacity-20 border-2 border-gray-100 rounded-2xl p-2 text-center transition shadow-2xl my-6 hover:scale-90 hover:bg-white relative overflow-ellipsis flex justify-center">
              <div className="flex flex-col justify-center align-middle w-full">
              <img src={coverImage} alt="" className=" h-[60%] object-contain rounded-md" />
              <div className="">
                <h4 className="text-sm  w-[90%]  text-ellipsis font-semibold mt-2 truncate ">{book.volumeInfo.title}</h4>
            <p className="bg-blue-500 text-white  text-[8px] absolute bottom-3 sm:bottom-1 right-3 left-3 font-medium rounded-sm">
                  {book.saleInfo.saleability}
                </p>
              </div>
              </div>
            </div>
            <DetailPage
              show={show}
              book={bookItem}
              onClose={() => setShow(false)} />
          </>
        );
      })}
    </>
  );
}

export default Card;
