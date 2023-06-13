import React from "react";
import Service from "./Service";
import cavity from "../../../assets/images/cavity.png";
import fluoride from "../../../assets/images/fluoride.png";
import whitening from "../../../assets/images/whitening.png";

const Services = () => {
	const serviceData = [
		{
			id: 1,
			name: "Cavity Filling",
			description:
				"If a dog chews shoes whose shoes does he choose?whose shoes does he choose.",
			icon: cavity,
		},

		{
			id: 2,
			name: " Fluride Treatment",
			description:
				"If a dog chews shoes whose shoes does he choose?whose shoes does he choose.",

			icon: fluoride,
		},
		{
			id: 3,
			name: "Teeth Whitening",
			description:
				"If a dog chews shoes whose shoes does he choose?whose shoes does he choose.",

			icon: whitening,
		},
	];
	return (
		<>
			<div className="text-center  pt-20 ">
				<h4 className="text-2xl   font-bold uppercase text-primary">Our Services</h4>
				<h2 className="text-4xl py-4 font-bold">Service We Provide</h2>
			</div>
			<div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{serviceData.map((service) => (
					<Service key={service.id} service={service}>
						{" "}
					</Service>
				))}
			</div>
		</>
	);
};

export default Services;
