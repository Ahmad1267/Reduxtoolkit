import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../components/Header";

function Cards() {
  const [data, setData] = useState([]);
  const [loading, setLoading]= useState(true);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(6);
  const indexOfLastItem = page * perPage;
  const indexOfFirstItem = indexOfLastItem - perPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / perPage);

  let getCompany = () => {
    axios.get(`https://dummyjson.com/products`)
      .then((res) => {
        setData(res.data.products);
        setLoading(false);
      });
  };

  useEffect(() => {
    getCompany();
  }, []);


  return (
    <>
      <Header />
      {/* Products Section */}
      {
          loading ? (<div className="fixed inset-0 flex items-center justify-center bg-white z-50"><div className="h-[50px] w-[50px] border-l-[10px] border-l-red-500 border-b-[10px] border-b-yellow-400 border-t-[10px] border-t-green-500 border-r-[10px] border-r-blue-500 rounded-full animate-spin">
</div></div>):(
      <div className="min-h-screen bg-gray-100 py-10 px-5">
        <div className="flex justify-center">
          <span className="inline-flex text-4xl font-bold text-gray-800">
            Products
          </span>
        </div>
        
        <div className="grid grid-cols-3 gap-6 mt-9 justify-items-center max-w-4xl mx-auto">
          {currentItems.map((obj, index) => (
            <Card data={obj} key={index} />
          ))}
        </div>
          
        <div className="flex justify-center mt-10 gap-5">
          <button onClick={() => setPage(page - 1)} disabled={page === 1} className="cursor-pointer border rounded-md px-3 text-white bg-green-600 hover:bg-green-900 py-1">Previous</button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button onClick={() => setPage(i + 1)} className="cursor-pointer border rounded-md px-3 text-white bg-green-600 py-1 hover:bg-green-900">
              {i + 1}
            </button>
          ))}
          <button onClick={() => setPage(page + 1)} disabled={page === totalPages} className="cursor-pointer border rounded-md px-3 text-white bg-green-600 hover:bg-green-900 py-1">
            Next
          </button>
        </div>
      </div>
      )}
    </>
  );
}

export default Cards;

function Card({ data }) {
  return (
    <div className="w-[280px] h-[380px] border border-gray-400 rounded-2xl bg-white transition duration-300 hover:scale-105 flex flex-col overflow-hidden">

      {/* Stock */}
      <span className="text-xs text-sky-600 hover:text-red-600 ml-3 mt-2 h-[18px]">
        {data.stock} available
      </span>

      {/* Image */}
      <div className="w-[80%] h-[130px] flex items-center ml-7 rounded-md justify-center shrink-0">
        <img
          src={data.thumbnail}
          alt={data.title}
          className="h-full object-contain hover:scale-130  transition-transform duration-1000"
        />
      </div>

      {/* Content */}
      <div className="px-3 pb-3 flex flex-col flex-1">

        {/* Title */}
        <h1 className="h-[56px] text-xl font-bold text-gray-400 hover:text-gray-600 leading-tight ml-3 overflow-hidden">
          {data.title}
        </h1>

        {/* Brand */}
        <h3 className="font-[Montserrat] text-sm font-semibold text-gray-800  ">
          {data.brand}
        </h3>

        {/* Product Details */}
        <div className="flex flex-col gap-1 flex-1">

          {/* Description */}
          <p className="h-[20px] line-clamp-1 font-[Inter] text-sm text-gray-600 truncate mt-2">
            {data.description}
          </p>

          {/* Category */}
          <span className="h-[20px] text-sm text-gray-900 capitalize">
            {data.category}
          </span>

          {/* Price */}
          <div className="mt-auto pt-2 border-t border-gray-400 flex items-center justify-between">
            <span className="font-semibold text-gray-500 text-sm">
              Price
            </span>

            <span className="text-sm text-gray-500 hover:text-black">
              ${data.price}
            </span>
          </div>

          {/* Button */}
          <button className="bg-black text-white py-2 px-3 cursor-pointer rounded-lg font-semibold text-sm hover:bg-gray-800 transition duration-300 w-full mt-1 mb-[2px]">
            Buy Now
          </button>

        </div>
      </div>
    </div>
  );
}