import React from "react";
import treatment from "../../../assets/images/treatment.png";
import {PrimaryBtn} from "../../../Components/Buttons/PrimaryBtn";

const ExcepCard = () => {
	return (
		<section className="my-20 py-5">
			{" "}
			<div className="hero ">
				<div className="hero-content flex-col lg:w-2/3 lg:flex-row">
					<img src={treatment} alt="" className="lg:w-1/2 rounded-lg shadow-2xl" />
					<div>
						<h1 className="text-5xl font-bold">Box Office News!</h1>
						<p className="py-6">
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
							excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
							id nisi.
						</p>
						<PrimaryBtn>Get Stated</PrimaryBtn>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ExcepCard;
