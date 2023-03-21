import axios from 'axios';
import React, { useState } from 'react'
import Card from './Card';
import Background from './images/mainImage.jpg'
function Body() {
    const [search, setSearch] = useState('');
    const [bookData, setBookData] = useState([]);
    const BooksData = (evt) => {
        if (evt.key === 'Enter'){
            axios
            .get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyBwJBOq8Gu3hgMAd1sULXAPYUZrhdzGaB0&maxResults=30`)
            .then((res)=> setBookData(res.data.items)
            )
            .catch((err) => console.log(err))
        }
    }
  return (
    <>
      <nav className='p-5 bg-sky-200 shadow-2xl shadow-sky-400 flex justify-center'>
        <input 
        type="text"
        placeholder='Enter book name'
        className='w-2/3 text-xl  font-bold placeholder:text-center placeholder:text-xs rounded-lg py-3 px-3'
        value={search}
        onChange = {(e)=>setSearch(e.target.value)}
        onKeyDown={BooksData} />
      </nav>
      <section 
      className='h-[500px] w-full shadow-lg shadow-cyan-700 flex items-center'
      style={{backgroundImage:`url(${Background})`,
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover'}}>
      </section>
      <div className='bg-[rgba(119,206,246,0.32)] backdrop-blur-3xl py-10 mt-3'>
              <section className='w-11/12 mx-auto mt-6 flex flex-wrap gap-2 justify-center'>
          <Card books={bookData} key={bookData.id} />
      </section>
      </div>
         <p className='bg-sky-500 text-center'>
            < a href="https://www.freepik.com/free-vector/people-library-flat-vector-illustration_9176169.htm#query=library&position=9&from_view=search&track=sph" className='hover:cursor-pointer'> Image by pch.vector</a > 
         on Freepik</p> 
    </>
  )
}

export default Body
