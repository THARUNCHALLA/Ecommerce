import { useDispatch, useSelector } from "react-redux";
import { setPrice } from "../../Store"

const Price = () => {
  const dispatch = useDispatch()
  const selected = useSelector(state => state.search.Price)
  const handleChange = (e) => {
    const value = e.target.value
    dispatch(setPrice(value));
  };

  return (
    <div>
      <p className="yrsa-Font text-2xl font-semibold my-2">Price</p>
      {['All', '$0-50', '$50-100', '$100-150', '$150-200'].map((opt, idx) => (
        <div className="flex items-center mb-1" key={opt}>
          <input
            type="radio"
            name="price"
            id={`Price-${opt}`}
            value={opt}
            onChange={handleChange}
            checked={selected === opt}
            className="w-4 h-4 text-blue-600"
          />
          <label
            htmlFor={`Price-${opt}`}
            className="ms-1 text-sm font-medium text-gray-900 cursor-pointer"
          >
            {opt}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Price;
