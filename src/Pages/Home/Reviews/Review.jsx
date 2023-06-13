import React from "react";

const Review = ({review}) => {
	const {name, img, description, country} = review;
	return (
		<div className="card shadow-xl ">
			<div className="card-body">
				<p>{description}</p>
				<div className="flex item-center my-5  ">
					<div className="avatar mr-6 ">
						<div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
							<img src={img} alt="" />
						</div>
					</div>
					<div className="item-center">
						<h4 className=" text-lg">{name}</h4>
						<h5>{country}</h5>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Review;
