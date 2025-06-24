import { setCategory } from "../../Store"
import { useDispatch, useSelector } from 'react-redux';

const Category = () => {
  const dispatch = useDispatch()
  const selected = useSelector(state => state.search.Category)
  return (
    <div>
      <p className="yrsa-Font text-2xl mb-2 font-semibold">Category</p>
      {['All', 'Sneakers', 'Flats', 'Sandals', 'Heels'].map((opt, i) => (
        <div key={opt} className="flex items-center mb-1">
          <input
            id={`radio-${opt}`}
            type="radio"
            name="category"
            value={opt}
            checked={selected === opt}
            onChange={() => dispatch(setCategory(opt))}
            className="w-4 h-4 text-blue-600"
          />
          <label
            htmlFor={`radio-${opt}`}
            className="ms-1 text-sm font-medium text-gray-900 cursor-pointer"
          >
            {opt}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Category;
