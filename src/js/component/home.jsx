import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar/>
			<Jumbotron/>
			<div className="row ">
			<Card className = "col-3" /><Card className = "col-3" /><Card className = "col-3" /><Card className = "col-3" />
			</div>
		</div>
	);
};

export default Home;
