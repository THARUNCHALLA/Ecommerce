import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../Store";
import { selectFilteredProducts } from "../Selectors";
import data from "../db/data";
import { AiFillStar } from "react-icons/ai";
import { IoLockClosed } from "react-icons/io5";
import Skeleton from 'react-loading-skeleton'
import ReactPaginate from 'react-paginate';
const itemsPerPage = 20;
const ProductCard = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(0);
  const filteredData = useSelector(selectFilteredProducts);
  let pageCount = Math.ceil(filteredData.length / itemsPerPage)
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };
  const offset = currentPage * itemsPerPage;
  const currentItems = filteredData.slice(offset, offset + itemsPerPage)

  useEffect(() => {
    dispatch(setProducts(data));
  }, []);
  return (
    <div className="my-8 mx-2">
      {currentItems.length === 0 ?
        <Skeleton count={10} /> :
        <div className="flex flex-wrap">
          {currentItems.map((each, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-sm p-4 w-64 h-72 flex flex-col hover:shadow-lg transition-shadow m-4"
            >
              <div className="flex justify-center">
                <img
                  src={each.img}
                  alt={each.title}
                  className="h-40 w-48 object-contain"
                />
              </div>
              <p className="font-mono text-md font-semibold mb-1">
                {each.title.toUpperCase()}
              </p>
              <div className="flex items-center">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <AiFillStar
                      key={`${each.id}-star-${i}`}
                      className="text-yellow-500"
                    />
                  ))}
                <p>{each.reviews}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-lg font-bold">
                  <span className="text-gray-500 line-through text-base mr-2">
                    {each.prevPrice}
                  </span>
                  {each.newPrice}
                </p>
                <IoLockClosed className="text-gray-400 text-xl" />
              </div>
            </div>
          ))}
        </div>
      }
      <ReactPaginate
        breakLabel="..."
        nextLabel="Nxt"
        previousLabel="Prev"
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        onPageChange={handlePageClick}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        containerClassName="flex justify-end items-center gap-2 mt-4 mx-12"
        pageClassName="px-3 py-1 border rounded-full"
        pageLinkClassName=""
        previousClassName={currentPage === 0 ? 'disabled-next-button' : 'text-blue-800'}
        nextLinkClassName={currentPage === pageCount - 1 ? 'disabled-next-button' : 'text-blue-800'}
        activeClassName="text-white bg-[#2874f0]"
      />


    </div>
  );
};

export default ProductCard;
