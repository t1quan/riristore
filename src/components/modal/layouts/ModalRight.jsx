import { RiCloseLine } from "@remixicon/react";
import { ModalContext } from "../../../contexts/ModalContext";
import { useContext } from "react";
function ModalRight() {
	const { handleCloseModal } = useContext(ModalContext);

	return (
		<div className="flex justify-end items-start sm:items-center min-h-full">
			<div className="w-full sm:max-w-md relative bg-gray-900 shadow-xl ring-1 ring-gray-700 h-screen">
				<span className="absolute top-3 left-3" onClick={handleCloseModal}>
					<RiCloseLine className="w-6 h-6 " />
				</span>
			</div>
		</div>
	);
}

export default ModalRight;
