import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Modal from "./modal";
import {addHobby, removeHobby} from "../redux/hobbies/hobbiesSlice";

function Hobbies(props) {
    const [modalVisible, setModalVisible] = useState(false);
    const ref = useRef(null);
    const state = useSelector(function (res) {
        return res.hobby
    })
    const dispatch = useDispatch();

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const addItem = () => {

        dispatch(addHobby(ref.current.value))
        setModalVisible(false)
    }

    const removeItem = (id) => {
        dispatch(removeHobby(id))
    }

    return (
        <div className="card bg-secondary text-white mb-3">
            <div className="card-header">
                <h2>Interests and Hobbies</h2>
            </div>
            <div className="card-body">
                {state?.value?.length > 0 ? (
                    state.value.map((item, index) => (
                        <div key={index} className="d-flex justify-content-between">
                            <p>{item.hobby}</p>
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => removeItem(item.id)}
                            >
                                Remove
                            </button>
                        </div>
                    ))
                ) : (
                    <p>No Hobbies information available.</p>
                )}
                <button className="btn btn-primary" onClick={openModal}>
                    Add your experience
                </button>
            </div>


            {modalVisible && <Modal addFunc={addItem} visible={modalVisible} setVisible={setModalVisible}>
                <div className="modal-body">
                    <div className="form-group">
                        <label htmlFor="hobby" className="text-black">
                            Hobby
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="hobby"
                            placeholder="Enter Your Hobby"
                            ref={ref}
                        />
                    </div>
                </div>
            </Modal>
            }
        </div>
    );
}

export default Hobbies;
