import React, { useState, useEffect,useContext } from "react";

import { Context } from '..store/appContext';

import "../../styles/home.scss";

export const Home = () => {
    const { store, actions } = useContext(Context);

    useEffect(()=>{
        actions.fetchPeople();
    }, []);



	return (
		<div className="text-center mt-5">
			<h1>Home</h1>
    <span>{JSON.stringify(store.peopleList)}</span>

		</div>
	);
};
