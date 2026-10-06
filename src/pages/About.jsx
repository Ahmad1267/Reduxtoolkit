import React from 'react'
import Header from '../components/Header'

function About() {
  return (
    <>
      <Header />
      <div className='bg-gray-200 min-h-screen'>
        <h1 className='  text-center text-4xl font-bold pt-5'>About our Product</h1>
        <div className='flex'>
             <div className='flex-col'>
              <h1 className='mt-19 ml-60 text-2xl'>Wide Range of Products</h1>
          <p className='mt-2 ml-45  max-w-[400px]'>Red nail polish is a timeless and elegant beauty choice that adds a bold and stylish touch to any look. Its rich red shade creates making it perfect for both everyday wear and special occasions. The smooth formula provides vibrant coverage with a beautiful glossy finish.</p>
          <h1 className='mt-3 ml-67 text-2xl'>Quality Products</h1>
          <p className='w-[400px] ml-45 mt-2 '>Customer satisfaction is one of our main priorities. We aim to provide a  clear information. Our collection includes a variety of products for different needs and preferences. We continuously add useful and stylish products to give our customers more choices.</p>
             <h1 className='mt-3 ml-66 text-2xl '>Affordable Prices</h1>
           <p className='w-[400px] ml-45 mt-2 '>We believe that good-quality products should be available at reasonable prices. We believe that good-quality products should be available at reasonable prices. We try to offer products that provide excellent value without compromising on quality.</p>
        </div>
        <div className='object-cover '>
           <h1 className='mt-19 ml-55 text-2xl '>Designed for Your Everyday Needs</h1>
           <p className='w-[400px] ml-50 mt-2 '>We care about the products we offer and aim to provide a smooth shopping experience from browsing to checkout. Whether you're looking for something useful for everyday life or something special for yourself, our collection is designed to give you plenty of choices.</p>
           <h1 className='mt-3 ml-70 text-2xl '>Quality You Can Trust</h1>
           <p className='w-[400px] ml-50 mt-2 '>Your satisfaction is important to us. We strive to provide clear product information,this is an easy-to-use shopping experience, and products that offer great value. We are always working to improve our collection and bring you better products.</p>
           <h1 className='mt-3 ml-82 text-2xl '>Our Promise</h1>
           <p className='w-[400px] ml-50 mt-2 '>Har product ko is nazariye se select kiya jata hai ke woh quality, functionality aur style ka behtareen combination provide kare. Hamari collection mein aapko aise products milenge jo daily use ko easier banane ke saath aapki lifestyle ko bhi complement karte hain.</p>
           </div>
           </div>


           
        <div className="bg-white mt-15 min-h-[300px] px-10 py-5">

          {/* About Us */}
          <div className="text-center">
            <h1 className="text-2xl font-bold">
              About Us
            </h1>
          </div>

          {/* Content */}
          <div className="flex justify-center gap-20 mt-10">

            {/* Our Identity */}
            <div className="w-[500px]">
              <h1 className="text-2xl font-bold text-center mb-4">
                Our Identity
              </h1>

              <div className="bg-gray-200 min-h-[120px] rounded-xl p-5 hover:scale-105 transition duration-500 cursor-pointer">
                <p className=" leading-6 text-center">
                  Our identity represents our commitment to quality, style, and
                  customer satisfaction. We believe in offering products that are
                  reliable, attractive, and designed to meet the needs of our
                  customers.
                </p>
              </div>
            </div>

            {/* Values and Vision */}
            <div className="w-[500px]">
              <h1 className="text-2xl font-bold text-center mb-4">
                Values and Vision
              </h1>

              <div className="bg-gray-200 min-h-[120px] rounded-xl p-5 hover:scale-105 transition duration-500 cursor-pointer">
                <p className="leading-6 text-center">
                  Our values are based on quality, honesty, innovation, and customer
                  trust. Our vision is to create a brand that inspires confidence
                  and provides a smooth and flexible shopping experience.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-green-300 h-[500px] w-[100%]'>

          <div className='text Center flex justify-center'>
            <h1 className='font-bold text-2xl mt-15'>Our Services</h1>
          </div>
          <div className='flex'>
            
            <div className='bg-white h-[130px] w-[400px] ml-70 mt-8 rounded-xl flex-col'>
              <h1 className='font-bold text-center mt-2'>Fast & Reliable Delivery</h1>
              <p className='w-[320px] text-center ml-10 cursor-pointer'>We provide fast and reliable delivery services to make sure your orders reach you safely and on time.</p>
            </div>
            <div className='bg-white h-[130px] w-[400px] ml-10 mt-8 rounded-xl flex-col object-cover'>
              <h1 className='font-bold text-center mt-2'>Fast & Reliable Delivery</h1>
              <p className='w-[320px] text-center ml-10 cursor-pointer'>We provide fast and reliable delivery services to make sure your orders reach you safely and on time.</p>
            </div>
          </div>
          <div className='flex'>

            <div className='bg-white h-[130px] w-[400px] ml-70 mt-8 rounded-xl flex-col'>
              <h1 className='font-bold text-center mt-2'>Fast & Reliable Delivery</h1>
              <p className='w-[320px] text-center ml-10 cursor-pointer'>Enjoy a simple, smooth, and secure shopping experience from browsing products to checkout.</p>
            </div>
            <div className='bg-white h-[130px] w-[400px] ml-10 mt-8 rounded-xl flex-col object-cover'>
              <h1 className='font-bold text-center mt-2'>Fast & Reliable Delivery</h1>
              <p className='w-[320px] text-center ml-10 cursor-pointer'>Our support team is always ready to help you with your orders, questions, and shopping needs.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
