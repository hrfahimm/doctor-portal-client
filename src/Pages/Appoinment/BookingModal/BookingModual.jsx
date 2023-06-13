import {format} from "date-fns";
import React from "react";

const BookingModual = ({treatment, selected}) => {
	const {name, slots} = treatment;
	const handleBooking = (e) => {
		e.preventDefault();
		const from = e.target;
		const name = from.name.value;
		const slot = from.slot.value;
		const email = from.email.value;
		const phone = from.phone.value;
		const booking = {
			appoinmentDate: date,
			treatment: name,
			patient: name,
			slot,
			email,
			phone,
		};
		console.log(booking);
		console.log(slot, email, phone, date, name);
	};
	return (
		<>
			<input type="checkbox" id="my_modal" className="modal-toggle" />
			<div className="modal">
				<div className="modal-box">
					<h3 className="font-bold text-lg">{name}</h3>
					<form onSubmit={handleBooking} className="grid grid-cols-1 gap-3 p-5 mt-10    ">
						<input
							type="text"
							value={format(selected, "PP")}
							className="input input-bordered w-full "
						/>
						<select name="slot" className="select  w-full max-w-xs">
							{slots.map((slot) => (
								<option value={slot}>{slot}</option>
							))}
						</select>
						<input
							name="name"
							type="text"
							placeholder="Your Name"
							className="input input-bordered w-full "
						/>
						<input
							name="email"
							type="text"
							placeholder="Email"
							className="input input-bordered w-full "
						/>
						<input
							name="number"
							type="text"
							placeholder="Number"
							className="input input-bordered w-full "
						/>
						<br />
						<input
							className="input input-bordered w-full  btn btn-accent"
							type="submit"
							value="Submit"
						/>
					</form>
					<div className="modal-action">
						<label htmlFor="my_modal" className="btn">
							Close!
						</label>
					</div>
				</div>
			</div>
		</>
	);
};

export default BookingModual;
