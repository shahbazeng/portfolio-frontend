import React, { createContext, useState , useEffect } from "react";

const MyContext = createContext();

const MyProvider=({children})=>{
    const [toggle, setToggle]= useState(true);

    useEffect(() => {
        document.body.style.backgroundColor = toggle ? "black" : "#fff";
       
      }, [toggle]);

    const toggleHandler = (e) => {
        if (e?.preventDefault) e.preventDefault();
        setToggle((prev) => !prev);
      };
    return(
        <MyContext.Provider value={{ toggle , toggleHandler }}>
            {children}
        </MyContext.Provider>
    )
}
export {MyContext , MyProvider};