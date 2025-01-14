import React, {useEffect, useRef, useState} from 'react';
import {useDispatch} from "react-redux";

function Modal({children,addFunc,setVisible}) {
    const closeModal = () => {
        setVisible(false)
    };

    return (
        <div className="modal" style={{ display: "block" }}>
            <div className="modal-dialog">
                <div className="modal-content" style={{ backgroundColor: "white" }}>
                    <div className="modal-header">
                        <h5 className="modal-title text-black">Add Hobby</h5>
                        <button
                            type="button"
                            className="close"
                            onClick={closeModal}
                            aria-label="Close"
                        >
                            &times;
                        </button>
                    </div>

                    {children}
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={closeModal}
                        >
                            Close
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={addFunc}
                        >
                            Add Hobby
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Modal;