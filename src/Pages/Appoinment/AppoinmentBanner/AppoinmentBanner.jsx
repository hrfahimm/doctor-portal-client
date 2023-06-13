import React from "react";
import {DayPicker} from "react-day-picker";
import chair from "../../../assets/images/chair.png";
const AppoinmentBanner = ({selected, setSelected}) => {
	return (
		<div className="hero  ">
			<div className="hero-content flex-col lg:flex-row-reverse">
				<img src={chair} alt="" className="max-w-sm lg:w-1/2 rounded-lg shadow-2xl" />
				<div className="m-6 ">
					<DayPicker mode="single" selected={selected} onSelect={setSelected} />
				</div>
			</div>
		</div>
	);
};

export default AppoinmentBanner;
