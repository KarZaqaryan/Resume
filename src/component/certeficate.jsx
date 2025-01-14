import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    addCertificate,
    removeCertificate,
} from "../redux/certeficate/certeficateSlice";
import Modal from "./modal"; // Assuming a Modal component is available

function Certificate() {
    const certificates = useSelector((state) => state.certificates.value);
    const dispatch = useDispatch();
    const [modalVisible, setModalVisible] = useState(false);
    const inputRef = useRef(null);

    const handleOpen = () => {
        setModalVisible(true);
    };

    const handleClose = () => {
        setModalVisible(false);
    };

    const handleAdd = () => {
        const certificateName = inputRef.current.value.trim();
        if (certificateName) {
            dispatch(addCertificate(certificateName));
            inputRef.current.value = "";
            handleClose();
        }
    };

    const handleRemove = (id) => {
        dispatch(removeCertificate(id));
    };

    return (
        <div className="card bg-secondary text-white mb-3">
            <div className="card-header">
                <h2>Certificates</h2>
            </div>
            <div className="card-body">
                {certificates.length > 0 ? (
                    certificates.map((cert) => (
                        <div key={cert.id} className="d-flex justify-content-between">
                            <p>{cert.txt}</p>
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => handleRemove(cert.id)}
                            >
                                Delete
                            </button>
                        </div>
                    ))
                ) : (
                    <p>No certificates available. Add a new one!</p>
                )}
                <div className="mt-3">
                    <button className="btn btn-primary" onClick={handleOpen}>
                        Add Certificate
                    </button>
                </div>
            </div>

            {modalVisible && (
                <Modal addFunc={handleAdd} setVisible={setModalVisible}>
                    <div className="modal-body">
                        <div className="form-group">
                            <label htmlFor="certificate" className="text-black">
                                Certificate Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="certificate"
                                placeholder="Enter certificate name"
                                ref={inputRef}
                            />
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
}

export default Certificate;
