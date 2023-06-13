import React from "react";
import Banner from "../Banner/Banner";
import InfoCards from "../InfoCards/InfoCards";
import Services from "../Services/Services";
import ExcepCard from "../ExcepCard/ExcepCard";
import Appoinment from "../Appoinment/Appoinment";
import Reviews from "../Reviews/Reviews";

const Home = () => {
	return (
		<div className="mx-5">
			<Banner></Banner>
			<InfoCards></InfoCards>
			<Services></Services>
			<ExcepCard></ExcepCard>
			<Appoinment></Appoinment>
			<Reviews></Reviews>
		</div>
	);
};

export default Home;
