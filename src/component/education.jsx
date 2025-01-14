import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEducation, removeEducation } from "../redux/education/educationSlice";
import Modal from "./modal"; // Assuming a Modal component is available

function Education() {
    const education = useSelector((state) => state.education.value);
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
        const educationName = inputRef.current.value.trim();
        if (educationName) {
            dispatch(addEducation(educationName));
            inputRef.current.value = "";
            handleClose();
        }
    };

    const handleRemove = (id) => {
        dispatch(removeEducation(id));
    };

    return (
        <div className="card bg-secondary text-white mb-3">
            <div className="card-header">
                <h2>Education</h2>
            </div>
            <div className="card-body">
                {education.length > 0 ? (
                    education.map((item) => (
                        <div key={item.id} className="d-flex justify-content-between">
                            <p>{item.education}</p>
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => handleRemove(item.id)}
                            >
                                Remove
                            </button>
                        </div>
                    ))
                ) : (
                    <p>No education information available.</p>
                )}
                <button className="btn btn-primary" onClick={handleOpen}>
                    Add your education
                </button>
            </div>

            {modalVisible && (
                <Modal addFunc={handleAdd} setVisible={setModalVisible}>
                    <div className="modal-body">
                        <div className="form-group">
                            <label htmlFor="education" className="text-black">
                                Education
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="education"
                                placeholder="Enter education name"
                                ref={inputRef}
                            />
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
}

export default Education;
