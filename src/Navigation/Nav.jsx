import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { setSearchingValue } from "../Store"
const Nav = () => {
  const dispatch = useDispatch();
  const searchingValue = useSelector((state) => state.search.searchingValue);
  return (
    <nav className="flex items-center justify-between bg-white border-b border-gray-200 px-6 py-3">
      <div className="flex-1 max-w-md">
        <input
          type="text"
          placeholder="Enter Your Search Shoes"
          value={searchingValue}
          onChange={(e) => dispatch(setSearchingValue(e.target.value))}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
        />
      </div>
      <div className="flex items-center space-x-4 ml-6 text-gray-600">
        <FiHeart className="text-xl hover:text-red-500 transition-colors" />
        <AiOutlineShoppingCart className="text-xl hover:text-blue-500 transition-colors" />
        <AiOutlineUserAdd className="text-xl hover:text-green-500 transition-colors" />
      </div>
    </nav>
  );
};

export default Nav;
