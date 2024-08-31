import { RiCloseLine } from "@remixicon/react";
import { ModalContext } from "../../../contexts/ModalContext";
import { useContext } from "react";
import PropTypes from "prop-types";

function ModalCenter({ children }) {
	const { handleCloseModal } = useContext(ModalContext);

	return (
		<div className="flex justify-center items-end sm:items-center min-h-full p-4">
			<div className="w-full sm:max-w-lg relative bg-gray-900 shadow-xl rounded-lg sm:my-8 ring-1 ring-gray-700 divide-y divide-gray-800">
				<div className="relative p-6 sm:px-12 py-8">
					<span className="absolute top-3 right-3 cursor-pointer" onClick={handleCloseModal}>
						<RiCloseLine className="w-6 h-6 " />
					</span>
					{children}
				</div>
			</div>
		</div>
	);
}

ModalCenter.propTypes = {
	children: PropTypes.node.isRequired,
};

export default ModalCenter;
