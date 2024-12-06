import React from 'react'
import Cards from '../components/Cards'
import list from '../../public/list.json'

import {Link} from 'react-router-dom';

function Course() {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 item-center justify-center text-center'>
          <h1 className='text-2xl md:px-20 px-4'>
            We're delighted to have you
            <span className='text-pink-500'> Here! :)</span>
          </h1>
          <p className='mt-10'>
            The course section in the BookstoreApp offers a curated collection of learning materials and workshops tailored for book enthusiasts, aspiring writers,
            and bookstore professionals. Explore topics like creative writing, literature appreciation, and the business of bookselling, all designed to enhance your knowledge and skills.
            Whether you're looking to craft your own story, understand literary trends, or run a successful bookstore, these courses provide valuable insights and hands-on guidance.
            Dive into a world of learning and grow your passion for books!
          </p>
          <Link to="/">
            <button className='mt-4 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>
              Back
            </button>
          </Link>
        </div>
        <div className='mt-10 grid grid-cols-1 md:grid-cols-4'>
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Course
