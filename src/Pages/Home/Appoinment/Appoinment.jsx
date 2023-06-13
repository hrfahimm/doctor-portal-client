import React from "react";
import doctor from "../../../assets/images/doctor.png";
import appiontment from "../../../assets/images/appointment.png";
import {PrimaryBtn} from "../../../Components/Buttons/PrimaryBtn";
const Appoinment = () => {
	return (
		<section
			className="mt-32"
			style={{
				background: `url(${appiontment})`,
				borderRadius: "20px",
			}}>
			{" "}
			<div className="hero ">
				<div className="hero-content flex-col lg:flex-row">
					<img
						src={doctor}
						alt=""
						className="-mt-32 lg:w-1/2 hidden lg:block rounded-lg shadow-2xl"
					/>
					<div>
						<h1 className="text-2xl text-primary pb-5 font-bold">Appoinment</h1>
						<h1 className="text-4xl font-bold text-white"> Make An Appoinment Today</h1>
						<p className="py-5 text-white">
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
							excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
							id nisi.
						</p>
						<PrimaryBtn>Geting Started</PrimaryBtn>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Appoinment;
