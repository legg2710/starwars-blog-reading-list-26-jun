import React, { useContext, useEffect, useState } from "react";

export const Planetas = () => {
    const {store, actions}= useContext(Context);
    
    // let [dataPlanetas,setDataPlanetas] = useState([]);

    // const planetList = () => {
    //     fetch("url",{
    //         method:"GET"
    //     })
    //     .then(response => response.json())
    //     .then(data => setDataPlanetas(data.results));
    // };


    useEffect(()=>{

        actions.fetchPlanetas();
    }, []);
    
    return (


    )
};
