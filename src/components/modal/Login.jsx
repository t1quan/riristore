/* eslint-disable react/prop-types */

import CustomInput from "../common/CustomInput";
import CustomBtn from "../common/CustomBtn";
import { RiGoogleFill, RiFacebookFill } from "@remixicon/react";
import ModalCenter from "./layouts/ModalCenter";
import { modalTypes } from "./ModalTypes";
import { ModalContext } from "../../contexts/ModalContext";

function Login() {
	const socialFields = [
		{
			href: "https://www.google.com/",
			icon: <RiGoogleFill className="w-5 h-5" />,
			label: "Google",
		},
		{
			href: "https://facebook.com/",
			icon: <RiFacebookFill className="w-5 h-5" />,
			label: "Facebook",
		},
	];

	return (
		<ModalCenter>
			<h2 className="text-2xl font-semibold capitalize">Login</h2>

			<div className="flex items-center gap-4 mt-4">
				{socialFields.map(({ href, icon, label }, index) => (
					<CustomBtn key={index} href={href} target="_blank" variant="outline" className="bg-gray-800 hover:bg-gray-700/50">
						{icon}
						{label}
					</CustomBtn>
				))}
			</div>

			<div className="flex items-center mt-4 text-center w-full gap-4">
				<span className="border-t border-gray-800 w-full"></span>
				<span className="text-sm">Or</span>
				<span className="border-t border-gray-800 w-full"></span>
			</div>

			<form action="">
				<CustomInput label="Email or Username" type="email" name="email" placeholder="Email" />
				<CustomInput label="Password" type="password" name="password" placeholder="Password" />

				<CustomBtn className="mt-5">Login</CustomBtn>

				<div className="mt-5 text-sm text-primary cursor-pointer hover:underline">Forgot password?</div>

				<div className="mt-3 text-sm">
					Do not have an account?
					<span className="text-primary cursor-pointer ml-3 hover:underline" onClick={() => {}}>
						Sign Up
					</span>
				</div>
			</form>
		</ModalCenter>
	);
}

export default Login;
