import React from "react";
import img from "../../../assets/images/chair.png";
import bg from "../../../assets/images/bg.png";
import {PrimaryBtn} from "../../../Components/Buttons/PrimaryBtn";
const Banner = () => {
	return (
		<div className="hero   shadow-xl image-full ">
			<figure>
				<img src={bg} alt="Shoes" />
			</figure>
			<div className="hero-content flex-col lg:flex-row-reverse">
				<img src={img} className=" rounded-lg lg:w-1/2 shadow-2xl" alt="" />
				<div>
					<h1 className="text-5xl font-bold">Box Office News!</h1>
					<p className="py-6">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
						exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
					</p>
					<PrimaryBtn>Get Start</PrimaryBtn>
				</div>
			</div>
		</div>
	);
};

export default Banner;
