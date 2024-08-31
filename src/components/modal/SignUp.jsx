/* eslint-disable react/prop-types */

import CustomInput from "../common/CustomInput";
import CustomBtn from "../common/CustomBtn";
import ModalCenter from "./layouts/ModalCenter";

function Signup() {
	const inputFields = [
		{ label: "Your Fullname", type: "text", name: "name", placeholder: "Your fullname" },
		{ label: "Your Account", type: "text", name: "account", placeholder: "Your account" },
		{ label: "Phone Number", type: "text", name: "phone", placeholder: "Phone number" },
		{ label: "Email", type: "email", name: "email", placeholder: "Email" },
		{ label: "Password", type: "password", name: "password", placeholder: "Password minimum 8 characters" },
	];

	return (
		<ModalCenter>
			<h2 className="text-2xl font-semibold capitalize">Sign up for an account</h2>
			<form action="">
				{inputFields.map(({ label, type, name, placeholder }, index) => (
					<CustomInput key={index} label={label} type={type} name={name} placeholder={placeholder} />
				))}

				<CustomBtn className="mt-5">Sign Up</CustomBtn>

				<div className="mt-5 text-sm">
					Do you already have an account?
					<span className="text-primary cursor-pointer ml-3 hover:underline" onClick={() => {}}>
						Login
					</span>
				</div>
			</form>
		</ModalCenter>
	);
}

export default Signup;
