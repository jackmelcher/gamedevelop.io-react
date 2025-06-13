import React from "react";

const Modal = ({setModalOpen,name,link}) => {
    return(
        <>
            <div className={"modal-background"}></div>
            <div className={"modal"}>
                <div>
                    <div className={"inline-block vertical-align"}><img
                        src="https://img.icons8.com/fluency/48/000000/error.png" alt="Warning"/></div>
                    <div className={"inline-block vertical-align"}>
                        <b>Warning. Unverified URL.</b>
                    </div>
                </div>
                <div>
                    Continue to the following Resource?
                </div>
                <br/>
                <div>
                    {name}
                </div>
                <br/>
                <div className={"modal-url"}>
                    {link}
                </div>
                <br/>
                <div>
                    <button className={"button button_modal"} onClick={() => setModalOpen(false)}>No</button>
                    <a href={link} className="button button_modal"
                       target="_blank" rel="noopener noreferrer">
                        Yes
                    </a>
                </div>
            </div>
        </>
    );
}
export default Modal;