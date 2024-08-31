import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";

function Modal() {
	const { handleCloseModal, typeModal } = useContext(ModalContext);

	return (
		<div className="fixed inset-0 z-50">
			<div className="absolute bg-gray-800/75 w-full h-full inset-0" onClick={handleCloseModal}></div>
			{typeModal}
		</div>
	);
}

export default Modal;
