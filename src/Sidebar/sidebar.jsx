import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import { setClear, setApply } from "../Store"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import _ from "lodash"
const Sidebar = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const Data = useSelector((state) => state.search.Apply);
    const dispatch = useDispatch()
    const Clear = () => {
        dispatch(setClear())
    }
    const Apply = () => {
        dispatch(setApply())
    }


    useEffect(() => {
        setSearchParams((prev) => {
            let p = new URLSearchParams(prev)
            const color = _.get(Data, "color", "");
            const price = _.get(Data, "price", "");
            const category = _.get(Data, "category", "")
            if (color && color !== "All") p.set("color", color);
            else p.delete("color")
            if (price && price !== "All") p.set("price", color);
            else p.delete("price")
            if (category && category !== "All") p.set("category", color);
            else p.delete("category")
            return p
        })
    }, [Data, setSearchParams]);



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

