import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { useDispatch } from 'react-redux'
import { increment } from '../Redux/CounterSlice';
import { decrement } from '../Redux/CounterSlice';

function Home() {
    let dispatch = useDispatch();
  return (

    <>
    <Header/>
       <div className="min-h-screen bg-gray-200 px-5 py-12">
<button className='bg-white w-[80px] h-[30px] cursor-pointer' onClick={()=>dispatch(increment())}>Increment</button>
  <br/>
  <button className='bg-white w-[80px] h-[30px] cursor-pointer' onClick={()=>dispatch(decrement())}>decrement</button>

  {/* Main Heading */}
  <div className="max-w-5xl mx-auto">
    
    <h1 className="text-4xl md:text-5xl font-bold">
      Welcome to Our Products App
    </h1>

    <p className="mt-6 text-lg font-serif text-gray-700">
      Discover a wide range of products in one simple and easy-to-use
      application.
    </p>

    <p className="mt-3 text-lg font-serif text-gray-700">
      Explore products, check their prices, view ratings, and find detailed
      information about the items you are interested in.
    </p>
  </div>

  {/* Features */}
  <div className="max-w-5xl mx-auto mt-10 grid md:grid-cols-3 gap-6">

    {/* Easy to Browse */}
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-500 cursor-pointer">
      <h2 className="text-2xl font-bold">
        Easy to Browse
      </h2>
      <p className="mt-3 font-[Tahoma] text-gray-600">
        Find products quickly with our simple and clean interface.
      </p>
    </div>

    {/* Product Details */}
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-500 cursor-pointer">
      <h2 className="text-2xl font-bold">
        Product Details
      </h2>
      <p className="mt-3 font-[Tahoma] text-gray-600">
        View product images, descriptions, prices, and ratings.
      </p>
    </div>

    {/* Responsive Design */}
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-500 cursor-pointer">
      <h2 className="text-2xl font-bold ">
        Responsive Design
      </h2>
      <p className="mt-3 font-[Arial] text-gray-600">
        Enjoy a smooth experience on desktop, tablet, and mobile devices.
      </p>
    </div>

  </div>

  {/* Start Exploring */}
  <div className="max-w-5xl mx-auto mt-10 bg-white p-8 rounded-xl text-center shadow-lg">
    <h2 className="text-3xl font-bold">
      Start Exploring
    </h2>

    <p className="mt-3 font-[Arial]">
      Explore our products and find something you like!
    </p>

    <button className="mt-5 bg-gray-200  px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition duration-300 cursor-pointer">
      Explore Products
    </button>
  </div>

</div>
<Footer/>

    </>
  )
}

export default Home
