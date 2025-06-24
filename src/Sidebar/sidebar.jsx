import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import { setClear,setApply } from "../Store"
import { useDispatch } from "react-redux";

const Sidebar = () => {
    const dispatch = useDispatch()
    const Clear = () => {
        dispatch(setClear())
    }
    const Apply = () =>{
        dispatch(setApply())
    }
    return (
        <div className="flex flex-col w-48 border-r border-gray-300 p-4" >
            <Category />
            <Price />
            <Colors />
            <div className="flex mt-6 space-x-2">
                <button
                    className="w-fit px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors" onClick={Apply}
                >
                    Apply
                </button>
                <button
                    className="w-fit px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition-colors" onClick={Clear}
                >
                    Reset
                </button>
            </div>
        </div>
    );
};

export default Sidebar;

