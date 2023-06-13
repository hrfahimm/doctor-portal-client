import React from "react";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";
const InfoCards = () => {
	const cardData = [
		{
			id: 1,
			name: "Opening Houre",
			description: "Open 9.00 am to 9.0 pm . every Day",
			icon: clock,
			bgClass: "bg-gradient-to-r from-primary to-secondary ",
		},

		{
			id: 2,
			name: "Our Location",
			description: "Laxmipur,chattagram,bangladesh",
			bgClass: "bg-gradient-to-r from-accent to-neutral ",
			icon: marker,
		},
		{
			id: 3,
			name: "Contacts Us",
			description: "0177777777",
			bgClass: "bg-gradient-to-r from-primary to-secondary  ",
			icon: phone,
		},
	];
	return (
		<div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
			{cardData.map((card) => (
				<InfoCard key={card.id} card={card}>
					{" "}
				</InfoCard>
			))}
		</div>
	);
};

export default InfoCards;
