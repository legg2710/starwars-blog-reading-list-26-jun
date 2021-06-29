const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
            peopleList:[],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
            fetchPeope: () => {
                const URL"https://swapi.dev/api/people/";
                const OBJCONFIG = {
                    method: "GET"
                    headers: {
                        "Content-type":"application/json"
                    }
                };

               // const response = 
                fetch( URL,OBJCONFIG)
                .then((res)=> res.json() ).
                .then( (data)=> setStore( {peopleList} ) );
            },
		
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
			
			},
			changeColor: (index, color) => {
			
				const store = getStore();

			
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
