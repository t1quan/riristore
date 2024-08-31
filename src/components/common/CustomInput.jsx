import PropTypes from "prop-types";

function CustomInput({ label, type = "text", value = "", onChange, name, placeholder = "", ...rest }) {
	return (
		<div className="mt-4">
			{label && (
				<label htmlFor={name} className="text-sm font-medium">
					{label}
				</label>
			)}
			<div className="mt-1 relative">
				<input
					id={name}
					type={type}
					value={value}
					onChange={onChange}
					name={name}
					placeholder={placeholder}
					{...rest}
					className="relative block w-full rounded-md placeholder-gray-500 text-sm px-3.5 py-2.5 shadow-sm bg-gray-900 ring-1 ring-inset ring-gray-700 focus:ring-2 focus:ring-primary focus:outline-none border-0"
				/>
			</div>
		</div>
	);
}

CustomInput.propTypes = {
	label: PropTypes.string,
	type: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
};

export default CustomInput;
