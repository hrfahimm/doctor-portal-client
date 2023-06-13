import React from "react";

import img from "../../../assets/icons/quote.svg";

import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import Review from "./Review";
const Reviews = () => {
	const review = [
		{
			id: 1,
			name: "Cavity Filling",
			country: "london",
			description:
				"  does he chooseIf a dog chews shoes whose shoes does he choose?whose shoes does he chooseIf a dog chews shoes whose shoes does he choose?whose shoes does he choose.",
			img: people1,
		},
		{
			id: 2,
			name: "Cavity Filling",
			country: "london",
			description:
				" shoes does he chooseIf a dog chews shoes whose shoes does he choose?whose shoes does he chooseIf a dog chews shoes whose shoes does he choose?whose shoes does he choose.",
			img: people2,
		},
		{
			id: 3,
			name: "Cavity Filling",
			country: "london",
			description:
				" whose shoes does he chooseIf a dog chews shoes whose shoes does he choose?whose shoes does he chooseIf a dog chews shoes whose shoes does he choose?whose shoes does he choose.",
			img: people3,
		},
	];
	return (
		<section>
			<div className="flex justify-between my-16 p-6">
				<div>
					<h4 className="text-primary text-xl">Testimonial</h4>
					<h2 className="text-3xl">What Our Paisent Say</h2>
				</div>
				<figure>
					<img className="w-20 lg:w-40" src={img} alt="Shoes" />
				</figure>
			</div>
			<div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{review.map((review) => (
					<Review key={review.id} review={review}></Review>
				))}
			</div>
		</section>
	);
};

export default Reviews;
