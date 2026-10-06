import React from 'react'
import Header from '../components/Header'


function Contact() {
    return (
        <>
            <Header />
            <div className='bg-gray-200 h-[590px] flex'>
                <div className='bg-white h-[450px] w-[1000px] mt-17 ml-45 rounded-xl'>
                    <div className='flex flex justify-center'>
                        <h1 className='font-bold text-2xl text-ceter mt-8'>Have Some Questions</h1>
                    </div>
                    <div className='flex'>
                        <div className='flex-col'>
                            <h2 className='text-2xl ml-25 mt-17 font-serif'>We'd love to hear from you</h2>
                        </div>
                        <div className='flex-col object-cover'>
                            <h2 className='mt-16 ml-50 text-xl'>Phone: +92 300 1234567</h2>
                            <div className='flex-col object-cover ml-55'>
                                <p >We Provide 24/7 support</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='flex-col'>
                            <p className='text-center w-[330px] ml-20'>If you have any questions, suggestions, or feedback, feel free to contact us. We are always happy to hear from you.</p>
                        </div>
                        <div className='flex-col object-cover mt-2'>
                            <h2 className='ml-43 text-xl'>Email: support@example.com</h2>
                            <div className='flex-col object-cover ml-50'>
                                <p >Replies within 24 hours</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='bg-gray-200 objcet-cover w-[130px] h-[50px] flex-col mt-5 rounded-md ml-43 justify-center'>
                            <button className=' text-xl px-3 py-2 cursor-pointer ml-1'>Contact Us</button>
                        </div>
                        <div className='flex-col object-cover'>
                            <h2 className='ml-70 w-[300px] text-xl'>Location: Mountain View, CA 94043, Lahore, Pakistan</h2>
                        </div>
                    </div>
                    {/* <div className='flex justify-center mt-15'>
                        <h3 className='text-xl'>Working Hours: Monday – Friday, 9:00 AM – 6:00 PM</h3>
                    </div> */}
                    <div className="flex items-center gap-3">
                        <div className="h-px bg-gray-300 flex-1 mt-9"></div>

                        <p className="text-sm whitespace-nowrap mt-9">
                            Working Hours: Monday – Friday, 9:00 AM – 6:00 PM
                        </p>

                        <div className="h-px bg-gray-300 flex-1 mt-9"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
