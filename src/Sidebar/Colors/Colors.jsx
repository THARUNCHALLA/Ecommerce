import { useDispatch,useSelector } from "react-redux";
import {setColor} from "../../Store"
const Colors = () => {
    const dispatch = useDispatch()
    const selected = useSelector(state => state.search.Color)
    const handleChange = (e) => {
        dispatch(setColor(e.target.value))
    };

    return (
        <div>
            <p className="yrsa-Font text-2xl font-semibold my-2">Colors</p>
            {['All', 'Black', 'Blue', 'Red', "Green", "White"].map((opt, idx) => (
                <div className="flex items-center mb-1" key={opt}>
                    <input
                        type="radio"
                        name="colors"
                        id={`Colors-${opt}`}
                        value={opt}
                        onChange={handleChange}
                        checked={selected === opt}
                        className="w-4 h-4 text-blue-600"
                    />
                    <label
                        htmlFor={`Colors-${opt}`}
                        className="ms-1 text-sm font-medium text-gray-900 cursor-pointer"
                    >
                        {opt}
                    </label>
                </div>
            ))}
        </div>
    );
};

export default Colors;
