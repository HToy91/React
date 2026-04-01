type ModalProps = {
    // Props must be parameterless functions that don't return anything
    completeTaskHandler: () => void;
    closeModalHandler: () => void;
}

// Props must match ModalProps type
function Modal({completeTaskHandler, closeModalHandler}: ModalProps) {
    return (
        <>
            <div>
                <div className="modal">
                    <p>Did you complete this task?</p>

                    <button className="btn btn-highlight" onClick={closeModalHandler}>Cancel</button>
                    <button className="btn" onClick={completeTaskHandler}>Confirm</button>
                </div>

                <div className="backdrop" onClick={closeModalHandler}></div>
            </div>
        </>
    )
}

export default Modal;