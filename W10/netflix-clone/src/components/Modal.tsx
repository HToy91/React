import ReactDOM from "react-dom";

interface ModalProps {
    dismissModal: () => void;
}

const Modal = ({ dismissModal }: ModalProps) => {

    const rootModalElement =
        document.getElementById("modal-root");

    return ReactDOM.createPortal(

        <>
            <div className="modal">

                <h1>Movie Added!</h1>

                <p>Movie successfully added to watchlist.</p>

                <button onClick={dismissModal}>Close</button>

            </div>

            <div className="backdrop" onClick={dismissModal}/>

        </>,

        rootModalElement!
    );
};

export default Modal;