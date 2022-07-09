import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FocusContext } from "../operations/FocusContext";

export const Title = () => {
    const { state } = useContext(FocusContext)
    const navigate=useNavigate()
    return (
        <div className="bg-sky-700 py-4 h-[12%] flex items-center grow-0 justify-between">
            <div><img src="/logo192.png" className="ml-2 h-12 w-12 sm:h-18 sm:w-18 top-2 left-2 rounded-full" alt="" /></div>
           
                <button className="absolute top-1 left-[50%] -translate-x-[50%]" onClick={()=>navigate('/')}>
                <svg className="h-8 w-8 fill-orange-500" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3135" width="200" height="200"><path d="M904.699382 574.392002l58.97416-58.97416-118.529557-118.520347 0.005117-213.882252-81.07041 0 0.00307 132.827191L513.284761 65.066925l-1.11438 1.113357-1.113357-1.113357L60.696896 515.416819l58.993602 58.95574 70.992891-70.991868 0.008186 456.137715 81.050967 0L271.742543 959.485661l492.354568 0.027629 0 0.005117 81.032548 0 0 0 0.019443 0L845.149101 878.429577l-0.017396 0 0.00921-363.590925L904.699382 574.392002zM764.095064 878.434693l-168.609139 0.010233L595.485925 607.621824l-166.594249 0 0 270.831288-157.149133 0.00921 0-456.138738 239.313457-239.308341 1.113357 1.113357 1.11438-1.113357 250.80007 250.77551L764.095064 878.434693z" p-id="3136"></path></svg>
                </button>
                <div className="absolute top-[6%] left-[50%] -translate-x-[50%] text-white texl-xl md:text-3xl font-sans text-center font-black">{state.userName}</div>
            <div><img src="/kelly.png" alt="kelly" className="mr-2 h-12 w-12 sm:h-18 sm:w-18 top-2 right-2 rounded-full" /></div>
        </div>
    )
}