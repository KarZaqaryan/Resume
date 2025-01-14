import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    addExperience,
    removeExperience,
} from "../redux/experience/experianceSlice";
import Modal from "./modal"; // Assuming a Modal component is available

function Experience() {
    const experiences = useSelector((state) => state.exp?.value || []); // Safe check for undefined
    const dispatch = useDispatch();
    const [modalVisible, setModalVisible] = useState(false);
    const companyRef = useRef(null);
    const workRef = useRef(null);

    const handleOpen = () => {
        setModalVisible(true);
    };

    const handleClose = () => {
        setModalVisible(false);
    };

    const handleAdd = () => {
        const companyName = companyRef.current.value.trim();
        const workTitle = workRef.current.value.trim();
        if (companyName && workTitle) {
            dispatch(addExperience({ company: companyName, work: workTitle }));
            companyRef.current.value = "";
            workRef.current.value = "";
            handleClose();
        }
    };

    const handleRemove = (id) => {
        dispatch(removeExperience(id));
    };

    return (
        <div className="card bg-secondary text-white mb-3">
            <div className="card-header">
                <h2>Experience</h2>
            </div>
            <div className="card-body">
                {experiences.length > 0 ? (
                    experiences.map((experience) => (
                        <div key={experience.id} className="d-flex justify-content-between">
                            <p>{experience.company} | {experience.work}</p>
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => handleRemove(experience.id)}
                            >
                                Remove
                            </button>
                        </div>
                    ))
                ) : (
                    <p>No experience information available. Add a new one!</p>
                )}
                <div className="mt-3">
                    <button className="btn btn-primary" onClick={handleOpen}>
                        Add Experience
                    </button>
                </div>
            </div>

            {modalVisible && (
                <Modal addFunc={handleAdd} setVisible={setModalVisible}>
                    <div className="modal-body">
                        <div className="form-group">
                            <label htmlFor="company" className="text-black">
                                Company Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="company"
                                placeholder="Enter company name"
                                ref={companyRef}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="work" className="text-black">
                                Job Title
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="work"
                                placeholder="Enter job title"
                                ref={workRef}
                            />
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
}

export default Experience;
