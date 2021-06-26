import React, {useState, useEffect} from "react";
import { Card } from "../component/card";

export const Personajes = () => {

    let [dataPersonajes,setDataPersonajes] = useState([]);

    const listadoPersonajes = () =>{
        fetch("https://swapi.dev/api/people/?page=2",{
            method:"GET"
        })
        .then(
            (response) =>   response.json()
        )
         .then(
            (data) => setDataPersonajes(data.results)
        )
                    
    }

    useEffect(
            () => {
                listadoPersonajes()
            }, 
            []
        )

    return 
    <div className= "container">
        <h1 className="my-5">Personajes</h1>;
        <div className= "row">
            {dataPersonajes.map(
                (item, index) => {
                    return (
                          <Card key={index} title={item.name}/>
                    )
                }
            )}
            
        </div>
    </div>
    
};
