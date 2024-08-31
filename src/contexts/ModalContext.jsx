import { createContext, useState } from "react";
import PropTypes from "prop-types";
import Modal from "../components/modal/Modal";

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
	const [showModal, setShowModal] = useState(false);
	const [typeModal, setTypeModal] = useState(null);

	const handleShowModal = (type) => {
		setShowModal(true);
		setTypeModal(type);
	};

	const handleCloseModal = () => {
		setShowModal(false);
		setTypeModal(null);
	};

	const modalData = { showModal, setShowModal, handleCloseModal, handleShowModal, typeModal };

	return (
		<ModalContext.Provider value={modalData}>
			{children}
			{showModal && <Modal />}
		</ModalContext.Provider>
	);
};

ModalProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export { ModalContext, ModalProvider };
