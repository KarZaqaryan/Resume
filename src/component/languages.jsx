import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Modal from "./modal";
import {addLanguage, removeLanguage} from "../redux/languages/languagesSlice";
import {RatingInitialState as language} from "../redux/rating/rating";

function Languages() {
    const languages = useSelector((state) => state.lang);
    const [modalVisible, setModalVisible] = useState(false);
    const lang = useRef();
    const level = useRef();

    const dispatch = useDispatch();

    function openModal() {
        setModalVisible(true);
    }

    function closeModal() {
        setModalVisible(false);
    }

    function addItem() {
        dispatch(addLanguage({
            lang: lang.current.value,
            level: level.current.value
        }));

        setModalVisible(false)
    }

    function removeItem(id) {
        dispatch(removeLanguage(id));
    }

    return (
        <div className="card bg-secondary text-white mb-3">
            <div className="card-header">
                <h2>Languages</h2>
            </div>
            <div className="card-body">
                {languages?.value?.length > 0 ? (
                    languages.value.map((item, index) => (
                        <div key={index} className="d-flex justify-content-between">
                            <p>{item.lang} | {item.level}</p>
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => removeItem(item.id)}
                            >
                                Remove
                            </button>
                        </div>
                    ))
                ) : (
                    <p>No education information available.</p>
                )}
                <button className="btn btn-primary" onClick={openModal}>
                    Add Language
                </button>
            </div>
            {modalVisible&&<Modal addFunc={addItem}
                                  setVisible={setModalVisible}
            >

            <div className="modal-body">
                <div className="form-group">
                    <label htmlFor="language" className={'text-black'}>Language</label>
                    <input
                        type="text"
                        className="form-control"
                        id="language"
                        placeholder="Enter Language name"
                        ref={lang}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="level" className={'text-black'}>Level</label>
                    <input
                        type="text"
                        className="form-control"
                        id="level"
                        placeholder="Enter Level of Language"
                        ref={level}
                    />
                </div>
            </div>
            </Modal>
            }

        </div>
    );
}

export default Languages;
