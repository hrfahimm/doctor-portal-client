import React from "react";

export const PrimaryBtn = ({children}) => {
	return (
		<button className="btn  btn-primary bg-gradient-to-r from-primary to-secondary text-white">
			{children}
		</button>
	);
};
